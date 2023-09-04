var express = require('express');
var morgan = require('morgan');
var mongoose = require('mongoose');

var app = express();

mongoose.connect('',function(err) {
    if(err) {
        console.log(err);
    } else {
        console.log('Connected to the database');
    }
});

//Middleware
app.use(morgan('dev'));

app.get('/', function(req, res) {
    res.json('Home URL');
});

app.listen(3000, function(err) {
    if(err) throw err;
    console.log("Server is Running");
});