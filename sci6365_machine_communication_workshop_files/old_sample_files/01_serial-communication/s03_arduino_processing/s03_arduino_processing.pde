// Sample code by Jose Luis Garcia del Castillo

// Make sure the arduino has the "s02_arduino_serial_strings"
// sketch loaded and running.

import processing.serial.*;

Serial mySerial;  // Create object from Serial class
boolean ledOn = false;

void setup() {
  size(400, 200);
  
  // Specify which port you are using for the Arduino
  //String portName = Serial.list()[0];  // this typically works for Macs
  String portName = "COM4";  // manual input
  mySerial = new Serial(this, portName, 9600);
}

void draw() {
  if (ledOn) {
    background(255);
  } else {
    background(0);
  }
  
  push();
  fill(255, 200);
  noStroke();
  rect(0, 0, width, 30);
  fill(0);
  text("Click on the screen to turn LED on/off", 20, 20);
  pop();
  
}

void mouseClicked() {
  if (ledOn) {
    ledOn = false;
    mySerial.write("off\n");
  } else {
    ledOn = true;
    mySerial.write("on\n");
  }
}
