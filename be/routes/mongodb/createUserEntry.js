module.exports = function (req, res) {
	const MongoClient = require("mongodb").MongoClient;

	let user = {
		email: req.body.email,
		UID: req.body.UID,
		confirmed: req.body.confirmed,
		active: req.body.active
	};

	if (user.email == null || user.UID == null || user.confirmed == null || user.active == null) {
		res.status(400).json({
			message: "Bad request"
		});
		return;
	}

	MongoClient.connect(process.env.MONOGO_URL, { useNewUrlParser: true }, function (err, client) {
		if (err) {
			res.status(500).json({
				message: "Cannot connect to server"
			});
			return;
		}
		let db = client.db("pacificgamingcafe");

		let dupDoc = db.collection("reservations").find({ UID: user.UID }).toArray(function (err, cursor) {
			if (err || cursor.length != 0) {
				res.status(400).json({
					message: "Bad request: Duplicate entry"
				});
			} else {
				db.collection("reservations").insertOne(user, function (err, res) {
					if (err) {
						res.status(400).json({
							message: "Bad request"
						});
						return;
					}
					console.log("User entry successfully created");
					client.close();
				});
			}
		});
	});
};