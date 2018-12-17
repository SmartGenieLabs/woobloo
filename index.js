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

app.use(bodyParser.json());

app.post("/api", Controller.getResponse);
app.post("/add", Controller.saveResponse);

var port = process.env.PORT || 8000
app.listen((port), () => {
    console.log("Server is up and running on port: ", port);
});

Controller.getResponse = (req, res) => {
    if(req.body.queryResult.intent.displayName == "Movie"){
        Response.findOne({service:req.body.queryResult.intent.displayName},(err, data) => {
            if(err){
                res.json("Oh oo, Something went wrong");
            }
            else{
                res.json("data.response");
            }
        });
    }
    if(req.body.queryResult.intent.displayName == "Cab"){
        Response.findOne({service:req.body.queryResult.intent.displayName},(err, data) => {
            if(err){
                res.json("Oh oo, Something went wrong");
            }
            else{
                res.json(data.response);
            }
        });
    }
    if(req.body.queryResult.intent.displayName == "Driver"){
        Response.findOne({service:req.body.queryResult.intent.displayName},(err, data) => {
            if(err){
                res.json("Oh oo, Something went wrong");
            }
            else{
                res.json(data.response);
            }
        });    }
    if(req.body.queryResult.intent.displayName == "Flight"){
        Response.findOne({service:req.body.queryResult.intent.displayName},(err, data) => {
            if(err){
                res.json("Oh oo, Something went wrong");
            }
            else{
                res.json(data.response);
            }
        });    }
    if(req.body.queryResult.intent.displayName == "Food"){
        Response.findOne({service:req.body.queryResult.intent.displayName},(err, data) => {
            if(err){
                res.json("Oh oo, Something went wrong");
            }
            else{
                res.json(data.response);
            }
        });    }
    if(req.body.queryResult.intent.displayName == "Handyman"){
        Response.findOne({service:req.body.queryResult.intent.displayName},(err, data) => {
            if(err){
                res.json("Oh oo, Something went wrong");
            }
            else{
                res.json(data.response);
            }
        });    }
}