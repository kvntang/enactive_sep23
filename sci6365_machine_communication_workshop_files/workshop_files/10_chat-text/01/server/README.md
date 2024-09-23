## SETUP

1. Install Nodejs LTS in your system: https://nodejs.org
2. Open a terminal in this folder. 
3. Install the dependencies by typing in the terminal (without the `$` symbol): `$ npm install`
4. Start the server by typing: `$ node server-chat.js`

Remember that every time you change the server code, you need to stop the server (`Ctrl + C` in Windows) and start it again. Alternatively, you can autoreload the server on any changes by installing tools like `nodemon`:

1. Install `nodemon` globally: `$ npm install nodemon -g`
2. Start the server using `nodemon` instead: `$ nodemon server-chat.js`