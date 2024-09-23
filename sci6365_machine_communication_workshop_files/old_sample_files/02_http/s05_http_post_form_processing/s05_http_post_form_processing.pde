// Sample code by Jose Luis Garcia del Castillo

// Load a HTTP requests library (included in the "code" folder)
import http.requests.*;

// POST requests send information attached to the request, 
// to have the server store them or to customize the response.

// This is a dummy server that will respond back whatever was posted to it.
String URL = "http://httpbin.org/post";
JSONObject response;

void setup() {
  size(400, 200); 
}

void draw() {
  background(255);
  
  push();
  fill(255, 200);
  noStroke();
  rect(0, 0, width, 30);
  fill(0);
  text("Click on the screen to perform an HTTP POST request to '" + URL + "', and read the resoluts in the console", 
      20, 20, width - 40, height - 40);
  pop();
}

void mouseClicked() {
  // Create the post request
  PostRequest post = new PostRequest(URL);
  
  // Add fields to the form request and send
  post.addData("message", "Hello Server!");
  post.send();
  
  // Wait for response and print it to console
  println("Reponse Content: " + post.getContent());
  println("Reponse Content-Length Header: " + post.getHeader("Content-Length"));
}
