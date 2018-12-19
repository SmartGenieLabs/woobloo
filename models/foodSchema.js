const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const foodSchema = new Schema(
  {
    username: {
      type: String,
      required: true,
      default: "John_smith"
    },
    orderName: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    time: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true
    },
    restName: {
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

const food = mongoose.model("food", foodSchema);
module.exports = food;
