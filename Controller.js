const Controller = {};
const Response = require('./models/responseSchema');

Controller.getResponse = (req, res) => {
    if(req.body.queryResult.intent.displayName == "Movie"){
        Response.findOne({service:req.body.queryResult.intent.displayName},(err, data) => {
            if(err){
                res.json("Oh oo, Something went wrong");
            }
            else{
                res.json(data.response);
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