# OpenCDN Backend Application

Welcome to OpenCDN Back End Application, this app was made using :

 - [Express.js](https://expressjs.com/)

## Getting Started

Before running the app, you need to install the necessary packages :

```bash
npm install
```
## API Documentation
## Request 1: Delete File and send invalidation requests to the cache servers of the CDN

### Description

This API request is used to delete the specified file from the CDN.

### Request Details

**Method:** `DELETE`

**URL:** `http://localhost:4000/`

####**** Request Parameters

| Parameter | Value |
|-----------|-------|
| path | /cdn/informatique/dev/jeux/CRD.pdf |

### Response Details

#### Response Body

```json
{
  "message": "The file was deleted successfully."
}
```

#### Response Codes

| Status Code | Description |
|-------------|-------------|
| 200         | The file was deleted successfully. |
| 404         | The file does not exist. |
| 500         | An error occurred while deleting the file. |

## Request 2: Get All Files

### Description

This API request is used to retrieve all files.

### Request Details

**Method**: GET

**URL**: `http://localhost:4000/files`

### Request Body

No request body is needed for this API request.

### Response Details

#### Response Body
```json
[
    {
        "tracks": [
            {
                "modules": [
                    {
                        "links": [
                            {
                                "title": "Lamport.pdf",
                                "type": "PDF",
                                "uri": "http://localhost:8080/informatique/security/reseau/Lamport.pdf"
                            }
                        ],
                        "title": "reseau",
                        "description": "Description Module"
                    },
                    {
                        "links": [
                            {
                                "title": "Profile.pdf",
                                "type": "PDF",
                                "uri": "http://localhost:8080/informatique/security/risques/Profile.pdf"
                            }
                        ],
                        "title": "risques",
                        "description": "Description Module"
                    }
                ],
                "title": "security",
                "id": "security",
                "description": "Description Track"
            }
        ],
        "title": "informatique",
        "id": "informatique",
        "description": "Description Field",
        "bg": "https://res.cloudinary.com/dgutsm0lt/image/upload/v1680300114/prjs/fields/informatique_gh3znz.jpg"
    }
]
```

#### Response Codes

| Status Code | Description |
|-------------|-------------|
| 200         | The request was successful. |
| 500         | An error occurred while retrieving the data from the server.


## Request 3: Add file

### Description

Uploads a file to the specified directory.
### Request Details

**Method**: POST

**URL**: `http://localhost:4000/files/add`

### Request Body

This endpoint requires a multipart/form-data request body, which should include the following fields:

 Field | Type | 
|-------------|-------------|
| folder         | string |
| file         | file
### Response Details

#### Response Body
```json
{
  "message": "File uploaded successfully"
}
```

#### Response Codes

| Status Code | Description |
|-------------|-------------|
| 200         | File uploaded successfully. |
| 400         | The specified path is incorrect or there was an error while uploading the file.
