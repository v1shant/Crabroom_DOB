const express = require('express');
const path = require('path');
const port = 8000;

const db = require('./config/mongoose');
const DOB = require('./models/dob');
const app = express();

app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded());

app.get('/', (req, res) => {
    DOB.find({}, (err, dob) => {
        if (err) {
            console.log('Error in finding data'); return;
        }
        return res.render('home', {
            dob: dob
        });
    });
});

app.post('/create-dob', (req, res) => {
    DOB.create({
        name: req.body.name,
        dob: req.body.dob,
        age: req.body.age 
        //age: {$divide: [{$subtract: [ new Date(), "$req.body.dob" ] }, (365 * 24*60*60*1000)]}
    }, function (err, newdata) {
        if (err) {
            console.log('error in creating data'); return;
        }
        console.log('New data', newdata);
        res.redirect('/');
    });
});

app.listen(port, (err) => {
    if (err) console.log('Error', err);
    console.log('Server is running on', port);
});
