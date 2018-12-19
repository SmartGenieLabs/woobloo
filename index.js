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

app.get("/cabs_view", Controller.viewCabs);

app.get("/drivers_view", Controller.viewDrivers);

app.get("/flights_view", Controller.viewFlights);
app.get("/food_delivery_view", Controller.viewFood);
app.get("/handyman_view", Controller.viewHandyman);
app.get("/movies_view", Controller.viewMovies);


app.get("/cabs_edit", Controller.getCabsResponse);
app.get("/drivers_edit", Controller.getDriversResponse);
app.get("/flights_edit", Controller.getFlightsResponse);
app.get("/food_delivery_edit", Controller.getFoodsResponse);
app.get("/handyman_edit", Controller.getHandymansResponse);
app.get("/movies_edit", Controller.getMoviesResponse);

app.post("/cabs_edit", Controller.saveCabsResponse);
app.post("/drivers_edit", Controller.saveDriversResponse);
app.post("/flights_edit", Controller.saveFlightsResponse);
app.post("/food_delivery_edit", Controller.saveFoodsResponse);
app.post("/handyman_edit", Controller.saveHandymanResponse);
app.post("/movies_edit", Controller.saveMoviesResponse);





app.post("/api", Controller.getResponse);
// app.post("/add", Controller.saveResponse);

var port = process.env.PORT || 8000
app.listen((port), () => {
    console.log("Server is up and running on port: ", port);
});

