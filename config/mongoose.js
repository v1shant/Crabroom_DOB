const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost/dob');

const db = mongoose.connection;

db.on('error', console.error.bind(console,"error connecting to db"));

db.once('open', () => {
    console.log('Connected to server');
});