#!/bin/bash

# if anny command didn't work, script will stop
set -e


IP="172.16.0.1"

script_path="$(cd "$(dirname "$0")" && pwd)"

current_dir="$(pwd)"

# Compare the script path with the current directory
if [[ "$script_path" != "$current_dir" ]]; then
  echo "Must be run in the same directory of the script"
  exit 1
fi

#######
echo creating virtual interface for the cluster

sudo ip link show k8s && sudo ip link delete k8s
sudo modprobe dummy
sudo ip link add k8s type dummy
sudo ip addr add "${IP}/24" dev k8s
sudo ip link set dev k8s up


#######

echo checking if docker is available

if ! command -v docker &> /dev/null; then
    echo "Docker is not installed. Installing Docker..."
    sudo apt update
    sudo apt install -y docker.io
    sudo systemctl enable docker --now
    sudo usermod -aG docker $USER
    printf '%s\n' "deb https://download.docker.com/linux/debian bullseye stable" |
    sudo tee /etc/apt/sources.list.d/docker-ce.list
    curl -fsSL https://download.docker.com/linux/debian/gpg |
    sudo gpg --dearmor -o /etc/apt/trusted.gpg.d/docker-ce-archive-keyring.gpg
    sudo apt update
    sudo apt install -y docker-ce docker-ce-cli containerd.io
    echo restart machine now
    exit
fi

#######
echo checking if minikube is available

if ! command -v minikube &> /dev/null; then
    curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
    sudo install minikube-linux-amd64 /usr/local/bin/minikube
fi


#######

echo Adding IP to insecure registry

echo "{\"insecure-registries\": [\"${IP}:1000\"]}" | sudo tee /etc/docker/daemon.json

#######


echo Restarting docker 
sudo service docker restart 

#######


echo Turn on the private registry

cd "private-registery" && docker compose down && docker compose up  -d

echo starting k8s cluster

#######


cd - 
cd file-backend-server  && minikube delete && minikube start --mount --mount-string ./files/:/cdn --insecure-registry ${IP}:1000
cd - 

#######

echo Waiting for the cluster to start
sleep 5

#######


echo building images 
docker compose build

echo Pushing images to private registry
docker compose push

#######

echo deploying in k8s

kubectl apply -f file-backend-server/deploy
kubectl apply -f frontend-prjs/deploy
kubectl apply -f cdn_backend-master/deploy


#######

echo Waiting for deployments to be applied
sleep 5


while [ ! -z "$(kubectl get pods | grep -v 'STATUS' | grep -v 'Running')" ]; do
    echo Waiting for all pods to be running
    sleep 10
done


echo All pods are up
#######



echo Adding port forward 

sudo -E kubectl port-forward svc/file-service 80:80 --address='0.0.0.0' & 
sudo -E kubectl port-forward svc/backend-service 4000:4000 --address='0.0.0.0' &    
sudo -E kubectl port-forward svc/front-service 3000:3000 --address='0.0.0.0' &
minikube addons enable metrics-server
    
#######


echo Done