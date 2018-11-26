module.exports = function(req) {
  const MongoClient = require("mongodb").MongoClient;
  const assert = require("assert");

  var user = {
    UID: req.body.UID,
    email: req.body.email,
    confirmed: req.body.confirmed
  };

  MongoClient.connect(
    process.env.MONOGO_URL,
    function(err, client) {
      assert.equal(null, err);
      var db = client.db("pacificgamingcafe");

      db.collection("Reservations").updateOne(
        { UID: user.UID },
        { $set: user },
        function(err, res) {
          assert.equal(null, err);
          console.log("User entry successfully updated");
          client.close();
        }
      );
    }
  );
};
