const mongodb = require('express').Router();
const checkParams = require('../../libraries/checkParams').checkParams;
const response = require('../response');

//mount the API here.
//const grabDB = require('./grabDB.js');
const createEntry = require('./createEntry');
const updatePending = require('./updatePending');


//Bind them here
// mongodb.get('/grabDB', grabDB);


mongodb.get('/inDB', (req, res) => {
  
  response.send(200, "You're in the DB", res);

});


mongodb.get('/craeteEntry/:id', (req, res) => {

  let param = req.params;

  if (checkParams(param)) {
    response.send(200, "You are about to create an entry", res);
  } else {
    response.send(401, "Unathorized Access", res);
  }

})

mongodb.get('/updatePending', (req, res) => {
  if (checkParams(param)) {
    response.send(200, "You made it!", res);
  } else {
    response.send(401, "Unathorized Access", res);
  }
})




module.exports = mongodb;