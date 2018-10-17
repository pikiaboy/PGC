const mongodb = require('express').Router();

//mount the API here.
//const grabDB = require('./grabDB.js');


//Bind them here
// mongodb.get('/grabDB', grabDB);


mongodb.get('/inDB', (req, res) => {
    res.status(200).json({
      message: 'in db!'
    });
  });


module.exports = mongodb;