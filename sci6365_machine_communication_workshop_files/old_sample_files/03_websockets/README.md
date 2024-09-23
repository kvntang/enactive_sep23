# Node.js & WebSocket — Simple chat tutorial

Code example from https://medium.com/@martin.sikora/node-js-websocket-simple-chat-tutorial-2def3a841b61

## Preparation
This files should work equally well on `Windows` or `MacOS` systems. BeFore you start, please install:
- `node.js`: https://nodejs.org/en/download/
- A good text/code editor, like Visual Studio Code: https://code.visualstudio.com/download. In fact, you should be reading this very `README.md` file with VSCode to get the nice markdown highlights! 🤓

## Running the chat_server
To run the `server`, you need to:
- Open a terminal inside the `server` folder.
- Install all the dependencies by typing `npm install`.
- Type `node chat-server.js`
- You are good to go! The server is now running on your computer, and you should be able to use the `chat_client` to connect to it. 

## Running the chat_client
To run the `client`, you need to:
- Open the `chat-frontend.js` file with your favorite text/code editor (VSCode, Atom, Sublime, Notepad, etc.).
- Look for the following lines of code:
``` javascript
    // open connection
    var connection = new WebSocket('ws://127.0.0.1:1337');
```
- In this line, you have to rewrite in the IP of the computer where the server is running. If you are running the client in the same computer as the server, then the default `127.0.0.1` IP is correct (this IP always points to your `localhost` machine). Otherwise, if you are trying to connect to a different computer on the network, you will need to input that computer's IP (for example, `192.168.0.101`). Make sure to keep the port number `:1337` as is.
- Replace the IP, and save the file. 
- Now, open `frontend.html` with a web browser, and you should be good! 


