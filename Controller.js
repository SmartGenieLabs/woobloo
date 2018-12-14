Controller = {};

Controller.getInfo = (req, res) => {
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
    if(req.body.result.metadata.intentName == "Cab"){
        return res.json("Your cab has been booked, you will get a call shortly.");
    }
    if(req.body.result.metadata.intentName == "Driver"){
        return res.json("Your request for driver is accepted, we will call you shortly.");
    }
    if(req.body.result.metadata.intentName == "Flight"){
        return res.json("Hola, your flight tickets has been booked.");
    }
    if(req.body.result.metadata.intentName == "Food"){
        return res.json("Food category");
    }
    if(req.body.result.metadata.intentName == "Handyman"){
        return res.json("Handyman category");
    }
}