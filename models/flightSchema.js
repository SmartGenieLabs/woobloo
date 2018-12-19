const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const flightSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      default: "John_smith"
    },
    arrival: {
      type: String,
      required: true
    },
    destination: {
      type: String,
      required: true
    },
    status: {
      type: String,
      required: true,
      default: "Pending"
    }
  },
  {
    timestamps: true
  }
);

const flight = mongoose.model("flight", flightSchema);
module.exports = flight;
