const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const filesRoutes = require("./app/routes/file.routes.js");
const morgan = require('morgan');

app.use(cors());


app.use(morgan('dev'));


app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.send("Welcome to this REST API\n");
});
app.use("/files", filesRoutes);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});