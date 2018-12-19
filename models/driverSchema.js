const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const driverSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      default: "John_smith"
    },
    pickup: {
      type: String,
      required: true
    },
    drop: {
      type: String,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    date: {
      type: String,
      required: true,
      default: "Not Available"
    },
    need: {
      type: String,
      required: true
    },
    type: {
      type: String,
      required: true,
      default: "Not Available"
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

const driver = mongoose.model("driver", driverSchema);
module.exports = driver;
