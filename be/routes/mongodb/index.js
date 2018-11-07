const mongodb = require('express').Router();

//mount the API here.
//const grabDB = require('./grabDB.js');
const createEntry = require('./createEntry');
const updatePending = require('./updatePending');


//Bind them here
// mongodb.get('/grabDB', grabDB);


mongodb.get('/inDB', (req, res) => {
    res.status(200).json({
      message: 'in db!'
    });
  });


mongodb.get('/craeteEntry', (req, res) =>{
  res.status(200).json({
    message: "Yeah, its doing something"
  });
})

mongodb.get('/updatePending', (req, res) =>{
  res.status(200).json({
    message: "Defintely doing something"
  });
})




module.exports = mongodb;