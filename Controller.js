const Controller = {};
const Response = require("./models/responseSchema");
const Movie = require("./models/movieSchema");
const Handyman = require("./models/handymanSchema");
const Food = require("./models/foodSchema");
const Flight = require("./models/flightSchema");
const Driver = require("./models/driverSchema");
const Cab = require("./models/cabSchema");

//Edit View Update response
Controller.getResponse = (req, res) => {
  if (req.body.result.metadata.intentName == "Movie") {
    var location = [];
    for (var value in req.body.result.parameters.movie_Location) {
      location.push(req.body.result.parameters.movie_Location[value]);
    }
    myData = new Movie({
      movieName: req.body.result.parameters.movie_Name,
      noOfTickets: req.body.result.parameters.movie_noOfTickets,
      time: req.body.result.parameters.movie_Time,
      location: location.toString()
    });
    console.log(myData);
    myData.save((err, data) => {
      if (err) {
        return res.json({
          speech: "Oh oo, Something went wrong",
          displayText: "Oh oo, Something went wrong",
          source: "api"
        });
      } else {
        Response.findOne(
          { service: req.body.result.metadata.intentName },
          (err, data) => {
            if (err) {
              return res.json({
                speech: "Oh oo, Something went wrong",
                displayText: "Oh oo, Something went wrong",
                source: "api"
              });
            } else {
              return res.json({
                speech: data.response,
                displayText: data.response,
                source: "api"
              });
            }
          }
        );
      }
    });
  }
  if (req.body.result.metadata.intentName == "Cab") {
    var drlocation = [];
    for (var value in req.body.result.parameters.cab_Drop[0]) {
      drlocation.push(req.body.result.parameters.cab_Drop[0][value]);
    }
    console.log(drlocation.toString());
    var prlocation = [];
    for (var value in req.body.result.parameters.cab_Pickup[0]) {
      prlocation.push(req.body.result.parameters.cab_Pickup[0][value]);
    }
    if (req.body.result.parameters.cab_Date == "") {
      var date = "Not Available";
    } else {
      var date = req.body.result.parameters.cab_Date;
    }
    if (req.body.result.parameters.cab_Class == "") {
      var type = "Not Available";
    } else {
      var type = req.body.result.parameters.cab_Class;
    }
    if (req.body.result.parameters.cab_NoOfPassengers == ""){
        var nop = "Not Available";
    }
    else{
        var nop = req.body.result.parameters.cab_NoOfPassengers;
    }

    myData = new Cab({
      pickup: prlocation.toString(),
      drop: drlocation.toString(),
      time: req.body.result.parameters.cab_time,
      date: date,
      noOfPassengers: nop,
      class: type
    });
    console.log(myData);
    myData.save((err, data) => {
      if (err) {
        return res.json({
          speech: "Oh oo, Something went wrong",
          displayText: "Oh oo, Something went wrong",
          source: "api"
        });
      } else {
        Response.findOne(
          { service: req.body.result.metadata.intentName },
          (err, data) => {
            if (err) {
              return res.json({
                speech: "Oh oo, Something went wrong",
                displayText: "Oh oo, Something went wrong",
                source: "api"
              });
            } else {
              return res.json({
                speech: data.response,
                displayText: data.response,
                source: "api"
              });
            }
          }
        );
      }
    });
  }
  if (req.body.result.metadata.intentName == "Driver") {
    var dlocation = [];
    for (var value in req.body.result.parameters.driver_Drop) {
      dlocation.push(req.body.result.parameters.driver_Drop[value]);
    }
    var plocation = [];
    for (var value in req.body.result.parameters.driver_Pickup) {
      plocation.push(req.body.result.parameters.driver_Pickup[value]);
    }
    if (req.body.result.parameters.driver_Date == "") {
      var date = "Not Available";
    } else {
      var date = req.body.result.parameters.driver_Date;
    }
    if (req.body.result.parameters.driver_JobType == "") {
      var type = "Not Available";
    } else {
      var type = req.body.result.parameters.driver_JobType;
    }
    myData = new Driver({
      pickup: plocation.toString(),
      drop: dlocation.toString(),
      time: req.body.result.parameters.driver_Time,
      date: date,
      need: req.body.result.parameters.driver_Need,
      type: type
    });
    console.log(myData);
    myData.save((err, data) => {
      if (err) {
        return res.json({
          speech: "Oh oo, Something went wrong",
          displayText: "Oh oo, Something went wrong",
          source: "api"
        });
      } else {
        Response.findOne(
          { service: req.body.result.metadata.intentName },
          (err, data) => {
            if (err) {
              return res.json({
                speech: "Oh oo, Something went wrong",
                displayText: "Oh oo, Something went wrong",
                source: "api"
              });
            } else {
              return res.json({
                speech: data.response,
                displayText: data.response,
                source: "api"
              });
            }
          }
        );
      }
    });
  }
  if (req.body.result.metadata.intentName == "Flight") {
    myData = new Flight({
      arrival: req.body.result.parameters.flight_Destination,
      destination: req.body.result.parameters.flight_Arrival
    });
    console.log(myData);
    myData.save((err, data) => {
      if (err) {
        return res.json({
          speech: "Oh oo, Something went wrong",
          displayText: "Oh oo, Something went wrong",
          source: "api"
        });
      } else {
        Response.findOne(
          { service: req.body.result.metadata.intentName },
          (err, data) => {
            if (err) {
              return res.json({
                speech: "Oh oo, Something went wrong",
                displayText: "Oh oo, Something went wrong",
                source: "api"
              });
            } else {
              return res.json({
                speech: data.response,
                displayText: data.response,
                source: "api"
              });
            }
          }
        );
      }
    });
  }
  if (req.body.result.metadata.intentName == "Food") {
    var location = [];
    for (var value in req.body.result.parameters.food_Location) {
      location.push(req.body.result.parameters.food_Location[value]);
    }
    if (req.body.result.parameters.food_Restaurant == "") {
      var rest = "Not Available";
    } else {
      var rest = req.body.result.parameters.food_Restaurant;
    }
    myData = new Food({
      orderName: req.body.result.parameters.food_OrderName,
      quantity: req.body.result.parameters.food_Number,
      time: req.body.result.parameters.food_Time,
      location: location.toString(),
      restName: rest
    });
    console.log(myData);
    myData.save((err, data) => {
      if (err) {
        return res.json({
          speech: "Oh oo, Something went wrong",
          displayText: "Oh oo, Something went wrong",
          source: "api"
        });
      } else {
        Response.findOne(
          { service: req.body.result.metadata.intentName },
          (err, data) => {
            if (err) {
              return res.json({
                speech: "Oh oo, Something went wrong",
                displayText: "Oh oo, Something went wrong",
                source: "api"
              });
            } else {
              return res.json({
                speech: data.response,
                displayText: data.response,
                source: "api"
              });
            }
          }
        );
      }
    });
  }
  if (req.body.result.metadata.intentName == "Handyman") {
    var location = [];
    for (var value in req.body.result.parameters.handyman_Location) {
      location.push(req.body.result.parameters.handyman_Location[value]);
    }
    myData = new Handyman({
      type: req.body.result.parameters.handyman_Name,
      date: req.body.result.parameters.handyman_Date,
      time: req.body.result.parameters.handyman_Time,
      location: location.toString()
    });
    console.log(myData);
    myData.save((err, data) => {
      if (err) {
        res.send(err);
      } else {
        Response.findOne(
          { service: req.body.result.metadata.intentName },
          (err, data) => {
            if (err) {
              return res.json({
                speech: "Oh oo, Something went wrong",
                displayText: "Oh oo, Something went wrong",
                source: "api"
              });
            } else {
              return res.json({
                speech: data.response,
                displayText: data.response,
                source: "api"
              });
            }
          }
        );
      }
    });
  }
};

Controller.saveCabsResponse = (req, res) => {
  console.log(req.body);
  Response.findOneAndUpdate(
    { service: "Cab" },
    { $set: { response: req.body.response } },
    { new: true },
    (err, data) => {
      if (err) {
        res.status(401).json(err);
      } else if (!data) {
        var myData = new Response(req.body);
        myData.save((err, data) => {
          if (err) {
            res.status(401).json(err);
          } else {
            res.status(200).redirect("/cabs_edit");
          }
        });
      } else {
        res.status(200).redirect("/cabs_edit");
      }
    }
  );
};
Controller.saveDriversResponse = (req, res) => {
  console.log(req.body);
  Response.findOneAndUpdate(
    { service: "Driver" },
    { $set: { response: req.body.response } },
    { new: true },
    (err, data) => {
      if (err) {
        res.status(401).json(err);
      } else if (!data) {
        var myData = new Response(req.body);
        myData.save((err, data) => {
          if (err) {
            res.status(401).json(err);
          } else {
            res.status(200).redirect("/drivers_edit");
          }
        });
      } else {
        res.status(200).redirect("/drivers_edit");
      }
    }
  );
};
Controller.saveFlightsResponse = (req, res) => {
  console.log(req.body);
  Response.findOneAndUpdate(
    { service: "Flight" },
    { $set: { response: req.body.response } },
    { new: true },
    (err, data) => {
      if (err) {
        res.status(401).json(err);
      } else if (!data) {
        var myData = new Response(req.body);
        myData.save((err, data) => {
          if (err) {
            res.status(401).json(err);
          } else {
            res.status(200).redirect("/flights_edit");
          }
        });
      } else {
        res.status(200).redirect("/flights_edit");
      }
    }
  );
};
Controller.saveFoodsResponse = (req, res) => {
  console.log(req.body);
  Response.findOneAndUpdate(
    { service: "Food" },
    { $set: { response: req.body.response } },
    { new: true },
    (err, data) => {
      if (err) {
        res.status(401).json(err);
      } else if (!data) {
        var myData = new Response(req.body);
        myData.save((err, data) => {
          if (err) {
            res.status(401).json(err);
          } else {
            res.status(200).redirect("/food_delivery_edit");
          }
        });
      } else {
        res.status(200).redirect("/food_delivery_edit");
      }
    }
  );
};
Controller.saveHandymanResponse = (req, res) => {
  console.log(req.body);
  Response.findOneAndUpdate(
    { service: "Handyman" },
    { $set: { response: req.body.response } },
    { new: true },
    (err, data) => {
      if (err) {
        res.status(401).json(err);
      } else if (!data) {
        var myData = new Response(req.body);
        myData.save((err, data) => {
          if (err) {
            res.status(401).json(err);
          } else {
            res.status(200).redirect("/handyman_edit");
          }
        });
      } else {
        res.status(200).redirect("/handyman_edit");
      }
    }
  );
};
Controller.saveMoviesResponse = (req, res) => {
  console.log(req.body);
  Response.findOneAndUpdate(
    { service: "Movie" },
    { $set: { response: req.body.response } },
    { new: true },
    (err, data) => {
      if (err) {
        res.status(401).json(err);
      } else if (!data) {
        var myData = new Response(req.body);
        myData.save((err, data) => {
          if (err) {
            res.status(401).json(err);
          } else {
            res.status(200).redirect("/movies_edit");
          }
        });
      } else {
        res.status(200).redirect("/movies_edit");
      }
    }
  );
};

//Edit View Get response
Controller.getCabsResponse = (req, res) => {
  Response.findOne({ service: "Cab" }, (err, data) => {
    if (err) {
      res.redirect;
    } else {
      return res.render("pages/cabs_edit", { result: data });
    }
  });
};

Controller.getDriversResponse = (req, res) => {
  Response.findOne({ service: "Driver" }, (err, data) => {
    if (err) {
      res.redirect;
    } else {
      return res.render("pages/drivers_edit", { result: data });
    }
  });
};

Controller.getFlightsResponse = (req, res) => {
  Response.findOne({ service: "Flight" }, (err, data) => {
    if (err) {
      res.redirect;
    } else {
      return res.render("pages/flights_edit", { result: data });
    }
  });
};

Controller.getFoodsResponse = (req, res) => {
  Response.findOne({ service: "Food" }, (err, data) => {
    if (err) {
      res.redirect;
    } else {
      return res.render("pages/food_delivery_edit", { result: data });
    }
  });
};

Controller.getHandymansResponse = (req, res) => {
  Response.findOne({ service: "Handyman" }, (err, data) => {
    if (err) {
      res.redirect;
    } else {
      return res.render("pages/handyman_edit", { result: data });
    }
  });
};

Controller.getMoviesResponse = (req, res) => {
  Response.findOne({ service: "Movie" }, (err, data) => {
    if (err) {
      res.redirect;
    } else {
      return res.render("pages/movies_edit", { result: data });
    }
  });
};

Controller.viewMovies = (req, res) => {
  Movie.find({}, (err, data) => {
    if (err) {
      res.status(400).json(err);
    } else {
      console.log(data);
      res.render("pages/movies_view", { result: data });
    }
  });
};

Controller.viewCabs = (req, res) => {
  Cab.find({}, (err, data) => {
    if (err) {
      res.status(400).json(err);
    } else {
      console.log(data);
      res.render("pages/cabs_view", { result: data });
    }
  });
};

Controller.viewDrivers = (req, res) => {
  Driver.find({}, (err, data) => {
    if (err) {
      res.status(400).json(err);
    } else {
      console.log(data);
      res.render("pages/drivers_view", { result: data });
    }
  });
};

Controller.viewHandyman = (req, res) => {
  Handyman.find({}, (err, data) => {
    if (err) {
      res.status(400).json(err);
    } else {
      console.log(data);
      res.render("pages/handyman_view", { result: data });
    }
  });
};

Controller.viewFood = (req, res) => {
  Food.find({}, (err, data) => {
    if (err) {
      res.status(400).json(err);
    } else {
      console.log(data);
      res.render("pages/food_delivery_view", { result: data });
    }
  });
};

Controller.viewFlights = (req, res) => {
  Flight.find({}, (err, data) => {
    if (err) {
      res.status(400).json(err);
    } else {
      console.log(data);
      res.render("pages/flights_view", { result: data });
    }
  });
};

module.exports = Controller;
