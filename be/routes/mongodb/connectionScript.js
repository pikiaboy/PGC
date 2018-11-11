const MongoClient = require('mongodb').MongoClient;



MongoClient.connect(process.env.MONOGO_URL, function(err, db) {
	if(!err) {
		console.log("We are connected");
  	}
});


