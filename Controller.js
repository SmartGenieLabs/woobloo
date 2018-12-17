const Controller = {};
const Response = require('./models/responseSchema');
const API_KEY = require('./apiKey');
const http = require('http');

Controller.getResponse = (req, res) => {
    if(req.body.result.metadata.intentName == "Movie"){
        Response.findOne({service:req.body.result.metadata.intentName},(err, data) => {
            if(err){
                return res.json({
                    speech: "Oh oo, Something went wrong",
                    displayText: "Oh oo, Something went wrong",
                    source: 'api'});
            }
            else{
                return res.json({
                    speech: data.response,
                    displayText: data.response,
                    source: 'api'});
            }
        });
    }
    if(req.body.result.metadata.intentName == "Cab"){
        Response.findOne({service:req.body.result.metadata.intentName},(err, data) => {
            if(err){
                return res.json({
                    speech: "Oh oo, Something went wrong",
                    displayText: "Oh oo, Something went wrong",
                    source: 'api'});
            }
            else{
                return res.json({
                    speech: data.response,
                    displayText: data.response,
                    source: 'api'});
            }
        });
    }
    if(req.body.result.metadata.intentName == "Driver"){
        Response.findOne({service:req.body.result.metadata.intentName},(err, data) => {
            if(err){
                return res.json({
                    speech: "Oh oo, Something went wrong",
                    displayText: "Oh oo, Something went wrong",
                    source: 'api'});
            }
            else{
                return res.json({
                    speech: data.response,
                    displayText: data.response,
                    source: 'api'});
            }
        });    }
    if(req.body.result.metadata.intentName == "Flight"){
        Response.findOne({service:req.body.result.metadata.intentName},(err, data) => {
            if(err){
                return res.json({
                    speech: "Oh oo, Something went wrong",
                    displayText: "Oh oo, Something went wrong",
                    source: 'api'});
            }
            else{
                return res.json({
                    speech: data.response,
                    displayText: data.response,
                    source: 'api'});
            }
        });    }
    if(req.body.result.metadata.intentName == "Food"){
        Response.findOne({service:req.body.result.metadata.intentName},(err, data) => {
            if(err){
                return res.json({
                    speech: "Oh oo, Something went wrong",
                    displayText: "Oh oo, Something went wrong",
                    source: 'api'});
            }
            else{
                return res.json({
                    speech: data.response,
                    displayText: data.response,
                    source: 'api'});
            }
        });    }
    if(req.body.result.metadata.intentName == "Handyman"){
        Response.findOne({service:req.body.result.metadata.intentName},(err, data) => {
            if(err){
                return res.json({
                    speech: "Oh oo, Something went wrong",
                    displayText: "Oh oo, Something went wrong",
                    source: 'api'});
            }
            else{
                return res.json({
                    speech: data.response,
                    displayText: data.response,
                    source: 'api'});
            }
        });    }
}

Controller.saveResponse = (req, res) => {
    Response.findOneAndUpdate({ service: req.body.service}, 
        { $set: {response: req.body.response}},
        {new: true}, (err, data) => {
            if(err){
                res.status(401).json(err);
            }
            else if(!data){
                var myData = new Response(req.body);
                myData.save((err, data) => {
                    if(err){
                        res.status(401).json(err);                    
                    }
                    else{
                        res.status(200).json(data);
                    }
                })
            }
            else{
                res.status(200).json(data);
            }
        })
}

module.exports = Controller;