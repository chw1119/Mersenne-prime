const webSocket = require("ws").Server;

module.exports = function(server) {
    const webSocketServer = new webSocket({server : server});

    webSocketServer.on ("connection",function(ws,req){
        
    })

}