const mongoose = require('mongoose');
const { Schema } = require('mongoose');


const handymanSchema = new Schema({
        username: {
            type: String, 
            required: true,
            default: "John_smith"
        },
        type:{
            type: String, 
            required: true
        },
        date:{
            type: String,
            required: true
        },
        time:{
            type: String,
            required: true
        },
        location:{
            type: String,
            required: true,
            default: "Not Available"
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

const handyman = mongoose.model('handyman',handymanSchema);
module.exports = handyman;