var MongoClient = require('mongodb').MongoClient;
MongoClient.connect("admin:gesher1@ds131963.mlab.com:31963/pacificgaming", function(err, db) {
	if(!err) {
		console.log("We are connected");
  	}
});


