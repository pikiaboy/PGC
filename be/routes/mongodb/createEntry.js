module.exports = function (user) {

	const MongoClient = require('mongodb').MongoClient;

	MongoClient.connect('mongodb://admin:gesher1@ds131963.mlab.com:31963/pacificgaming', {
		useNewUrlParser: true
	}, function (err, client) {
		if (err) throw err;
		console.log("Connected successfully");
		var db = client.db("pacificgaming");

		db.collection("Users").insertOne(user, function (err, res) {
			if (err) {
				throw err;
				console.log("Failed to create entry");
			} else {
				console.log("Entry successfully created");
			}
			client.close();
		});
	});
}
