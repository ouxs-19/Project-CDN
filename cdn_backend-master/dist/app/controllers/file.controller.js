const axios = require('axios');
const fs = require('fs');
const multer = require('multer');



exports.addFile = (req, res) => {
    const storage = multer.diskStorage({
        destination: function(req, file, cb) {
            const folderPath = (process.env.FILES_LOCATION || "/cdn") + JSON.parse(req.body.folder);
            console.log(folderPath)

            if (!fs.existsSync(folderPath)) {
                cb(new Error('The specified path is incorrect.'));
            } else {
                cb(null, folderPath);
            }
        },
        filename: function(req, file, cb) {
            //console.log(file.originalname);
            cb(null, file.originalname);
        }
    });

    const upload = multer({ storage: storage });
    upload.single('file')(req, res, function(err) {
        if (err) {
            return res.status(400).json({ message: err.message });
        } else {
            res.status(200).send('File uploaded successfully');
        }
    });
}

function removeAccentedE(str) {
    // Normalize the string to Unicode NFC form
    str = str.normalize("NFC");

    // Replace all types of accented "e" with normal "e"
    str = str.replace(/[éèêë]/gi, "e");
    str = str.replace(/ /g, "_");


    return str;
}

function getFileType(fileName) {
    if (fileName.endsWith(".pdf")) {
        return "PDF";
    } else if (fileName.endsWith(".mp4") || fileName.endsWith(".avi") || fileName.endsWith(".mkv")) {
        return "Video";
    } else {
        return "Unknown";
    }
}
// Retrieve all files from the database.
exports.getAll = async(req, res) => {
    const endpointIp = process.env.ENDPOINT_IP || '172.16.0.1'; //replace localhost with 193.194.77.253
    const endpointPort = process.env.ENDPOINT_PORT || 80; //replace 8080 with 80
    const haproxyIp = process.env.HAPROXY_IP || 'localhost'||'193.194.77.246';
    const haproxyPort = process.env.HAPROXY_PORT ||8080|| 80; 
    const link = `http://${endpointIp}:${endpointPort}`;
    const haproxy_link = `http://${haproxyIp}:${haproxyPort}`;
    console.log(haproxy_link);
    try {
        const response = await axios.get(link);
        const data = response.data;
        const total = [];

        for (const value1 of data) {
            if (value1["type"] === "directory") { //specialités
                const respF = {};
                respF["tracks"] = [];
                respF["title"] = value1["name"];
                respF["id"] = removeAccentedE(value1["name"]);
                respF["description"] = "Description Field";
                respF["bg"] = "https://res.cloudinary.com/dgutsm0lt/image/upload/v1680300114/prjs/fields/informatique_gh3znz.jpg";

                const response1 = await axios.get(link + "/" + value1["name"]);
                const dataF = response1.data;

                for (const value2 of dataF) { //extraire tracks
                    if (value2["type"] === "directory") {
                        const respT = {};
                        respT["modules"] = [];
                        respT["title"] = value2["name"];
                        respT["id"] = removeAccentedE(value2["name"]);
                        respT["description"] = "Description Track";

                        const response2 = await axios.get(link + "/" + value1["name"] + "/" + value2["name"]);
                        const dataT = response2.data;

                        for (const value3 of dataT) { //extraire modules
                            if (value3["type"] === "directory") {
                                const respM = {};
                                respM["links"] = [];
                                respM["title"] = value3["name"];
                                respM["id"] = removeAccentedE(value3["name"]);
                                respM["description"] = "Description Module";

                                const response3 = await axios.get(link + "/" + value1["name"] + "/" + value2["name"] + "/" + value3["name"]);
                                const dataM = response3.data;

                                for (const value4 of dataM) { //extraire files
                                    if (value4["type"] === "file") {
                                        const respFi = {};
                                        respFi["title"] = value4["name"];
                                        respFi["type"] = getFileType(value4["name"]);
                                        respFi["uri"] = haproxy_link + "/" + value1["name"] + "/" + value2["name"] + "/" + value3["name"] + "/" + value4["name"];
                                        respM["links"].push(respFi);
                                    }
                                }

                                respT["modules"].push(respM);
                            }
                        }

                        respF["tracks"].push(respT);
                    }
                }

                total.push(respF);
            }
        }
        res.status(200).send(total);
    } catch (error) {
        console.log(res);
        console.error(error);
        res.status(500).send('Error retrieving data from server');
    }

};

exports.deleteByPath = async (req, res) => {
    const filePath = (process.env.FILES_LOCATION || "/cdn") + req.body.path;
    console.log(filePath);
    if (!fs.existsSync(filePath)) {
      return res.status(404).json({ message: 'The file does not exist.' });
    }
    const nginxHost = ["localhost:8080","193.194.77.142:80","193.194.77.222:80","193.194.77.190:80"];
    const fileUri = req.body.path;
    try {
      await fs.promises.unlink(filePath);
  
      await Promise.all(nginxHost.map(async (element) => {
        try {
          await axios.head(`http://${element}${fileUri}`, {
            headers: {
              'invalid-header': 'true',
            },
          });
          console.log('Invalidation successfully sent to cache server ' + `http://${element}${fileUri}`);
        } catch (error) {
          console.log("Could not reach cache server " + `http://${element}${fileUri}`);
        }
      }));
  
      res.status(200).json({ message: 'The file was deleted successfully.' });
    } catch (error) {
      console.log(error);
      return res.status(500).json({ message: 'An error occurred while deleting the file.' });
    }
  };