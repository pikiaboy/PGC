require('dotenv').config();

var express = require("express");
var bodyParser = require("body-parser")

//All routes will be linked to this
const routes = require('./routes');

var app =  express();

//So we can send and prase JSON
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

   
app.use('/', routes);


var server = app.listen(8082, function () {
    var host = server.address().address;
    var port = server.address().port;
    
    console.log("App listening at http://%s:%s", host, port);
 })
