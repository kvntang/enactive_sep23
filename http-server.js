
// Sep 23 workshop- HTTP Server

const express = require('express'); // import express

const PORT = 5566;
const app = express(); //create an app
app.use(express.json()); // config

// start the app, which port and callback function
app.listen(PORT, () => {
    console.log("Listening on Port:", PORT);
})


//SIMPLE GET route that returns a hello message
app.get('/hello', (req, res) => {
    console.log("A client reacher /hello"); //confirm on server
    res.send("Hello, I'm Kevin! welcome.") //send back to browser
});


app.get('/hello-html', (req, res) => {
    console.log("A client reacher /hello-html"); //confirm on server

    html = `
    <h1> Hi, there </h1>
    <h3> This is Kevin!</h3>
    
    <p1>Welcome to my page</p1>
    `;

    res.send(html) //send back to browser
});



app.post("/sum", (req, res) => {
    const body = req.body; //what the client is giving me, a JSON object
    console.log("I recieved a request", body);

    const resBody = {
        result: body.a + body.b
    }

    res.send(resBody);
})