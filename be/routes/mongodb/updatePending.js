module.exports = function (query) {
	const MongoClient = require('mongodb').MongoClient;

	MongoClient.connect('mongodb://admin:gesher1@ds131963.mlab.com:31963/pacificgaming', {useNewUrlParser:true}, function(err, client) {
		if (err) throw err;
	console.log("Connected successfully");
	var db = client.db("pacificgaming");

	var exists = db.collection("Users").findOne(query);
	if (exists) {
		console.log(exists.pending);
		if (exists.pending) {
			db.collection("Users").updateOne(query, { $set: {"pending" : 1}});
			console.log("Successful pending update");
		}
		else {
			//return ("Error, user already pending");
			console.log("Error, user already pending");
		}
	}
	else {
		console.log("User not found");
	}

	process.on('unhandledRejection', up => { throw up });
	
	//if user exists, check pending. if pending is 0 then update and return success. if pending is 1 then return failure, pending already exists. if no user return failure no user
	client.close();
	});
}
