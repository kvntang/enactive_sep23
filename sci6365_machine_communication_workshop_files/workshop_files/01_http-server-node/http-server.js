// Import modules
const express = require('express');

// Define server port
const PORT = 5566;

// Initialize app
const app = express();

// Configure app to parse JSON payloads
app.use(express.json());

// Start!
app.listen(PORT, () => {
  console.log("Server Listening on PORT:", PORT);
});


/**
 * Create a route that returns a simple string
 */
app.get('/hello', (req, res) => {
  console.log("Requested 'hello'");

  res.send('hello world!');
});


/**
 * Create a route that returns an html-formatted string
 */
app.get('/hello-html', (req, res) => {
  console.log("Requested 'hello-html'");
  const html = `
  <body>
    <h1>TITLE</h1>
    <p>Hello World!</p>
  </body>
  `;

  res.send(html);
});


/**
 * Create a route that takes a JSON object with `a` and `b`
 * values, and returns the SUM.
 */
app.post('/arithmetic/sum', (req, res) => {
  const body = req.body;
  console.log("Requested 'sum' with:", body);
  const resJson = { 
    sum: body.a + body.b
  };
  res.send(resJson);
})


// Lastly, serve static files
app.use(express.static('public'));

// And add a 404 error message for any route not specified above
app.use((req, res) => {
  res.status(404).send(`
<h1>404</h1>
<p>What are you looking for? It's not here!</p>
    `);
});