#minikube start --addons=nfs-client --addons=metrics-server
#minikube dashboard --url=true
minikube start --addons=nfs-client
kubectl proxy --address='0.0.0.0' --disable-filter=true