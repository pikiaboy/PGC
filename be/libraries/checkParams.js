const hash = require('./md5');

function checkParameters(paramters) {
    console.log(hash.md5(paramters.id));

    if (paramters.id !== "100") {
        return false;
    } else {
        return true;
    }
}


module.exports = {
    checkParams: checkParameters,
}