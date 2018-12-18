const mongoose = require('mongoose');
const { Schema } = require('mongoose');


const movieSchema = new Schema({
        username: {
            type: String, 
            required: true,
            default: "John_smith"
        },
        movieName:{
            type: String, 
            required: true
        },
        noOfTickets:{
            type: Number,
            required: true
        },
        time:{
            type: String,
            required: true
        },
        location:{
            type: String,
            required: true
        },
        status:{
            type: String,
            required: true,
            default: "Pending"
        }
    },
        {
            timestamps:true
        }
);

const movie = mongoose.model('movie',movieSchema);
module.exports = movie;