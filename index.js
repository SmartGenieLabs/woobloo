const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const API_KEY = require('./apiKey');
const app = express();
const mongoose = require('mongoose');
const Controller = require('./Controller');

mongoose.connect("mongodb://woobloo:woobloo1@ds121652.mlab.com:21652/woobloo");

app.use(bodyParser.urlencoded({
    extended: true
}));

// Setting View Engine as EJS
app.set("view engine", "ejs");
app.use(express.static("./views/assets"));

app.use(bodyParser.json());

app.get("/", (req, res) => {
    res.render("index");
});
app.post("/api", Controller.getResponse);
app.post("/add", Controller.saveResponse);

var port = process.env.PORT || 8000
app.listen((port), () => {
    console.log("Server is up and running on port: ", port);
});

