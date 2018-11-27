const jwt = require('jsonwebtoken');


module.exports = function(req,res){
    console.log("Verify Token");

    let decoded; 

    try{
        decoded = jwt.verify(req.body.token, 'privKey');
        if (decoded['user'] == process.env.ADMIN_USER){
            console.log("user matches");
        }else {
            console.log(decoded);
            res.set(401).json({
                "message": "Unauthorized access... This incident is being reported"
            })
            return false;
        }
        console.log("Authorized");
    } catch (err){
        console.log(err);
        return false
    }

    return true; 
}