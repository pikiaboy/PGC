module.exports = function(req, res) {
  let MongoClient = require("mongodb").MongoClient;
  const assert = require("assert");

  let user = {
    UID: req.body.UID,
    email: req.body.email,
    confirmed: req.body.confirmed
  };

  MongoClient.connect(
    process.env.MONOGO_URL,
    function(err, client) {
      if (err) {
        res.send(500, "Cannot connect to Mongodb", res);
        return;
      }
      var db = client.db("pacificgamingcafe");

      db.collection("Reservations").insertOne(user, function(err, res) {
        assert.equal(null, err);
        console.log("User entry successfully created");
        client.close();
      });
    }
  );
};
