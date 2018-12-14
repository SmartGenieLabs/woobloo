const express = require('express');
const bodyParser = require('body-parser');
const http = require('http');
const API_KEY = require('./apiKey');
const app = express();
const Controller = require('./Controller');

mongoose.connect("mongodb://woobloo:woobloo1@ds121652.mlab.com:21652/woobloo");

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

app.post("/", Controller.getInfo);


app.listen((process.env.PORT || 8000), () => {
    console.log("Server is up and running...");
});