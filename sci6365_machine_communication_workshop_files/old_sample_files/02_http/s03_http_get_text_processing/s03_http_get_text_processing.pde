// Sample code by Jose Luis Garcia del Castillo

//String URL = "http://www.garciadelcastillo.es/simple-text-file.txt";
//String URL = "http://www.garciadelcastillo.es/simple-webpage.html";
String URL = "http://gsd.harvard.edu";
String[] response;

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
  // When `loadStrings` is given a URL, it performs an HTTP GET 
  // request under the hood, and returns an array of Strings divided
  // by new line characters.
  response = loadStrings(URL);
  
  println("RECEIVED THE FOLLOWING RESPONSE FROM '" + URL + "':");
  for(String line : response) {
    println(line);
  }
}
