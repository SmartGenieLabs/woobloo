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

app.get("/cabs_view", (req, res) => {
    res.render("pages/cabs_view");
});
app.get("/drivers_view", (req, res) => {
    res.render("pages/drivers_view");
});

app.get("/flights_view", (req, res) => {
    res.render("pages/flights_view");
});
app.get("/food_delivery_view", (req, res) => {
    res.render("pages/food_delivery_view");
});
app.get("/handyman_view", (req, res) => {
    res.render("pages/handyman_view");
});
app.get("/movies_view", (req, res) => {
    res.render("pages/movies_view");
});


app.get("/cabs_edit", (req, res) => {
    res.render("pages/cabs_edit");
});
app.get("/drivers_edit", (req, res) => {
    res.render("pages/drivers_edit");
});
app.get("/flights_edit", (req, res) => {
    res.render("pages/flights_edit");
});
app.get("/food_delivery_edit", (req, res) => {
    res.render("pages/food_delivery_edit");
});
app.get("/handyman_edit", (req, res) => {
    res.render("pages/handyman_edit");
});
app.get("/movies_edit", (req, res) => {
    res.render("pages/movies_edit");
});





app.post("/api", Controller.getResponse);
app.post("/add", Controller.saveResponse);

var port = process.env.PORT || 8000
app.listen((port), () => {
    console.log("Server is up and running on port: ", port);
});

