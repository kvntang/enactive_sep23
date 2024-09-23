// A simple WebSockets chat server that 
// bounces incoming messages around between clients. 

// Load WS module
const WebSocket = require('ws');

// Set up the server
const PORT = 5544;
const wsServer = new WebSocket.WebSocketServer({
    port: PORT
});
console.log( (new Date()) + " Server is listening on port " + PORT);

// Program the actions of the WS server
wsServer.on('connection', (socket, req) => 
{
    // Some feedback on the console
    console.log("A client just connected...");

    
    socket.on('close', function () {
        console.log('Client disconnected...');
    })
});


