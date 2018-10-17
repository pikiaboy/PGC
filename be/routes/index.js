const routes = require('express').Router();
const mongodb = require('./mongodb');


//Attatch endpoints here
routes.use('/mongodb/', mongodb);




routes.get('/', (req, res) => {
  res.status(200).json({
    message: 'Connected!'
  });
});

module.exports = routes;