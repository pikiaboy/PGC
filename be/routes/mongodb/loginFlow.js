const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = function (req, res){
    let userName = req.body.user; 
    let pass = req.body.pass; 

    console.log("Login request from: " + req.body.user);

    if (userName != process.env.ADMIN_USER){
        res.set(401).json({
            "message": "Wrong User/Password"
        })
        return;
    }

    if (pass != process.env.ADMIN_PASS){
        res.set(401).json({
            "message": "Wrong User/Password"
        })
        return;
    }

    const token = jwt.sign(req.body, 
                        'privKey',
                        { expiresIn: '20m'});

    res.set(200).json({
        'message': "Authorized",
        'token': token
    });
}