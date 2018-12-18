const mongoose = require('mongoose');
const { Schema } = require('mongoose');


const responseSchema = new Schema({
        service: {
            type: String, 
            required: true
        },
        response:{
            type: String, 
            required: true
        },
    },
        {
            timestamps:true
        }
);

const response = mongoose.model('response',responseSchema);
module.exports = response;