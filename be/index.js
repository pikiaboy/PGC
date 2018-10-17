require('dotenv').config();

var express = require("express");
var bodyParser = require("body-parser")
var mongoose = require('mongoose')


//All routes will be linked to this
const routes = require('./routes');

var app =  express();

//So we can send and prase JSON
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

   
app.use('/', routes);

mongoose.connect('mongodb://testing1:testing1@ds135003.mlab.com:35003/pacificgcafe', (err) => {
    if (!err)
        console.log('connected successfully to monoDB')
})



var server = app.listen(8082, function () {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log("App listening at http://%s:%s", host, port);
 })
