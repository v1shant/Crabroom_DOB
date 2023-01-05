const mongoose = require('mongoose');

const dobSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true
    },
    dob:{
        type: Date,
    },
    age:{
        type: Number,
    }
});

const Dob= mongoose.model('Dob', dobSchema);
module.exports = Dob; 