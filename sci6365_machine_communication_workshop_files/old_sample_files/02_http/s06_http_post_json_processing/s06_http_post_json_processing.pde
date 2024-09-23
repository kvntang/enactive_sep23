// Sample code by Jose Luis Garcia del Castillo

// POST requests send information attached to the request, 
// to have the server store them or to customize the response.

// This is a dummy server that will respond back whatever was posted to it.
String URL = "http://httpbin.org/post";
JSONObject request;
JSONObject response;

void setup() {
  size(400, 200); 
  
  // Load full JSON request from local file
  request = loadJSONObject("joseluis.json");
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
  // Compose and send the HTTP POST request using the JSON file
  PostRequest post = new PostRequest(URL);
  post.addHeader("Content-Type", "application/json");
  post.addJSONString(request.toString());  // this method is custom added to Rune/Dan's library
  post.send();
  
  // Wait for the response
  String res = post.getContent();
  //println("Response Content: " + res);
  println("Response Content-Length Header: " + post.getHeader("Content-Length"));
  response = parseJSONObject(res);
  println(response);  
}
