const Controller = {};
const Response = require('./models/responseSchema');

Controller.getResponse = (req, res) => {
    if(req.body.result.metadata.intentName == "Movie"){
        const movieToSearch = req.body.result && req.body.result.parameters && req.body.result.parameters.movie ? req.body.result.parameters.movie : 'The Godfather';
    const reqUrl = encodeURI(`http://www.omdbapi.com/?t=${movieToSearch}&apikey=${API_KEY}`);
    http.get(reqUrl, (responseFromAPI) => {
        let completeResponse = '';
        responseFromAPI.on('data', (chunk) => {
            completeResponse += chunk;
        });
        responseFromAPI.on('end', () => {
            const movie = JSON.parse(completeResponse);
            let dataToSend = movieToSearch === 'The Godfather' ? `I don't have the required info on that. Here's some info on 'The Godfather' instead.\n` : '';
            dataToSend += `${movie.Title} is a ${movie.Actors} starer ${movie.Genre} movie, released in ${movie.Year}. It was directed by ${movie.Director}`;

            return res.json({
                speech: dataToSend,
                displayText: dataToSend,
                source: 'get-movie-details'
            });
        });
    }, (error) => {
        return res.json({
            speech: 'Something went wrong!',
            displayText: 'Something went wrong!',
            source: 'get-movie-details'
        });
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
    if(req.body.result.intent.displayName == "Driver"){
        Response.findOne({service:req.body.result.metadata.intentName},(err, data) => {
            if(err){
                res.json("Oh oo, Something went wrong");
            }
            else{
                res.json(data.response);
            }
        });    }
    if(req.body.result.intent.displayName == "Flight"){
        Response.findOne({service:req.body.result.metadata.intentName},(err, data) => {
            if(err){
                res.json("Oh oo, Something went wrong");
            }
            else{
                res.json(data.response);
            }
        });    }
    if(req.body.result.intent.displayName == "Food"){
        Response.findOne({service:req.body.result.metadata.intentName},(err, data) => {
            if(err){
                res.json("Oh oo, Something went wrong");
            }
            else{
                res.json(data.response);
            }
        });    }
    if(req.body.result.metadata.intentName == "Handyman"){
        Response.findOne({service:req.body.result.metadata.intentName},(err, data) => {
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