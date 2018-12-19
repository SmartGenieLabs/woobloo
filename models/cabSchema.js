const mongoose = require('mongoose');
const { Schema } = require('mongoose');


const cabSchema = new Schema({
        username: {
            type: String, 
            required: true,
            default: "John_smith"
        },
        time:{
            type: String, 
            required: true
        },
        date:{
            type: String,
        },
        class:{
            type: String,
            default: "Not Available" 
        },
        noOfPassengers:{
            type: String,
            default: "Not Available"
        },
        drop:{
            type: String,
            required: true
        },
        pickup:{
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

const cab = mongoose.model('cab',cabSchema);
module.exports = cab;