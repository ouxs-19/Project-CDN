from flask import Flask, jsonify
import requests

app = Flask(__name__)

@app.route('/files', methods=['GET'])
def fetch_files():
    files_url = 'http://backend:4000/files'

    try:
        response = requests.get(files_url)
        response.raise_for_status() 
        files = response.json()
        return jsonify(files)
    except requests.exceptions.RequestException as e:
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(debug=True,port=2000,host="0.0.0.0")
