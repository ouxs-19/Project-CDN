from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import os
import requests
import shutil
from werkzeug.utils import secure_filename

app = Flask(__name__)

cors = CORS(app)



@app.route("/")
def home():
    return "<h1>Welcome to this REST API</h1>"

@app.route("/files/add", methods=["POST"])
def add_file():
    folder_path = (os.environ.get("FILES_LOCATION") or "/cdn") + request.json["folder"]
    if not os.path.exists(folder_path):
        return jsonify(message="The specified path is incorrect."), 400

    if "file" not in request.files:
        return jsonify(message="No file uploaded."), 400

    file = request.files["file"]
    filename = secure_filename(file.filename)
    file_path = os.path.join(folder_path, filename)
    file.save(file_path)

    return jsonify(message="File uploaded successfully."), 200


@app.route("/files", methods=["GET"])
def get_all_files():
    endpoint_ip = os.environ.get("ENDPOINT_IP") or "localhost"
    endpoint_port = os.environ.get("ENDPOINT_PORT") or "80"
    link = f"http://{endpoint_ip}:{endpoint_port}"
    
    try:
        response = requests.get(link)
        data = response.json()
        total = []

        for value1 in data:
            if value1["type"] == "directory":
                respF = {
                    "tracks": [],
                    "title": value1["name"],
                    "id": remove_accented_e(value1["name"]),
                    "description": "Description Field",
                    "bg": "https://res.cloudinary.com/dgutsm0lt/image/upload/v1680300114/prjs/fields/informatique_gh3znz.jpg"
                }

                response1 = requests.get(f"{link}/{value1['name']}")
                dataF = response1.json()

                for value2 in dataF:
                    if value2["type"] == "directory":
                        respT = {
                            "modules": [],
                            "title": value2["name"],
                            "id": remove_accented_e(value2["name"]),
                            "description": "Description Track"
                        }

                        response2 = requests.get(f"{link}/{value1['name']}/{value2['name']}")
                        dataT = response2.json()

                        for value3 in dataT:
                            if value3["type"] == "directory":
                                respM = {
                                    "links": [],
                                    "title": value3["name"],
                                    "id": remove_accented_e(value3["name"]),
                                    "description": "Description Module"
                                }

                                response3 = requests.get(f"{link}/{value1['name']}/{value2['name']}/{value3['name']}")
                                dataM = response3.json()

                                for value4 in dataM:
                                    if value4["type"] == "file":
                                        respFi = {
                                            "title": value4["name"],
                                            "type": get_file_type(value4["name"]),
                                            "uri": f"{link}/{value1['name']}/{value2['name']}/{value3['name']}/{value4['name']}"
                                        }
                                        respM["links"].append(respFi)

                                respT["modules"].append(respM)

                        respF["tracks"].append(respT)

                total.append(respF)
        response = jsonify(total)
        response.headers.add('Access-Control-Allow-Origin', '*')
        return response

    except Exception as e:
        print(e)
        return jsonify(message=str(e)), 500


@app.route("/files/delete", methods=["DELETE"])
def delete_file_by_path():
    file_path = (os.environ.get("FILES_LOCATION") or "/cdn") + request.json["path"]
    
    if not os.path.exists(file_path):
        return jsonify(message="The file does not exist."), 404

    try:
        os.remove(file_path)
        return jsonify(message="The file was deleted successfully."), 200
    except Exception as e:
        print(e)
        return jsonify(message="An error occurred while deleting the file."), 500

def remove_accented_e(string):
    string = string.replace("é", "e").replace("è", "e").replace("ê", "e").replace("ë", "e")
    string = string.replace(" ", "_")
    return string


def get_file_type(file_name):
    if file_name.endswith(".pdf"):
        return "PDF"
    elif file_name.endswith((".mp4", ".avi", ".mkv")):
        return "Video"
    else:
        return "Unknown"

if __name__ == "__main__":
    app.run(debug=True, port=4000,host="0.0.0.0")
