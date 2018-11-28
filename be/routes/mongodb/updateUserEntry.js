module.exports = function (req, res) {
  const MongoClient = require("mongodb").MongoClient;

  let user = {
    email: req.body.email,
    UID: req.body.UID,
    confirmed: req.body.confirmed,
    active: req.body.active
  };

  let response = res;

  if (user.email == null || user.UID == null || user.confirmed == null || user.active == null) {
    res.status(400).json({
      message: "Bad request"
    });
    return;
  }

  MongoClient.connect(process.env.MONOGO_URL, function (err, client) {
    if (err) {
      response.status(500).json({
        message: "Cannot connect to server"
      });
      return;
    }
    var db = client.db("pacificgamingcafe");

    db.collection("reservations").updateOne({ UID: user.UID }, { $set: user }, function (err, res) {
      if (err) {
        response.status(400).json({
          message: "Bad request"
        });
        return;
      }
      console.log("User entry successfully updated");
      response.status(200).json({
        "message": "User Entry updated",
        "stats": "ok"
      })
      client.close();
    });
  });
};
