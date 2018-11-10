function send(status, message, response){
    response.status(status).json({
        message: message
    });
}



module.exports = {
    send: send,
}