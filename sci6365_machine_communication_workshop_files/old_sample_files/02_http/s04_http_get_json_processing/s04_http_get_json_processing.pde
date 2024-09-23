// Sample code by Jose Luis Garcia del Castillo

String URL = "https://api-v3.mbta.com/stops/place-harsq";
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
  text("Click on the screen to perform an HTTP GET request to '" + URL + "', and read the resoluts in the console", 
      20, 20, width - 40, height - 40);
  pop();
}

void mouseClicked() {
  // When `loadJSONObject` is given a URL, it performs an HTTP GET 
  // request under the hood, and returns a JSON object that can be parsed.
  response = loadJSONObject(URL);
  
  println("RECEIVED THE FOLLOWING RESPONSE FROM '" + URL + "':");
  println(response);
  
  // Since the response was a JSON file, let's traverse the JSON structure
  // to figure out some data...
  String address = response.getJSONObject("data").getJSONObject("attributes").getString("address");
  float lat = response.getJSONObject("data").getJSONObject("attributes").getFloat("latitude");
  float lon = response.getJSONObject("data").getJSONObject("attributes").getFloat("longitude");
  
  String msg = "The Harvard Square T stop is on " + address + ", with coordinates [" + lat + ", " + lon + "]";
  println(msg);
}
