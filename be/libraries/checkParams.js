require('dotenv').config();

const hash = require('./md5');

function checkParameters(paramters) {
    id = hash.md5(paramters.id);
    console.log("Client Id: " + id);
    console.log("Server Id: " + process.env.CLIENT_ID);

    if (id !== process.env.CLIENT_ID) {
        return false;
    } else {
        return true;
    }
}


module.exports = {
    checkParams: checkParameters,
}