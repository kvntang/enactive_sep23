String incomingString = ""; // for incoming serial data
int ledPin = 13;

void setup() {
  Serial.begin(9600); // opens serial port, sets data rate to 9600 bps

  pinMode(ledPin, OUTPUT);
}

void loop() {
  // send data only when you receive data:
  if (Serial.available() > 0) {
    // read the incoming string until a new line character:
    incomingString = Serial.readStringUntil('\n');

    // say what you got:
    Serial.print("I received: ");
    Serial.println(incomingString);

    // decide what to do with the message
    if (incomingString.equalsIgnoreCase("on")) {
      digitalWrite(ledPin, HIGH);
      Serial.println("Turning LED on");
    } else if (incomingString.equalsIgnoreCase("off")) { 
      digitalWrite(ledPin, LOW);
      Serial.println("Turning LED off");
    } else {
      Serial.println("I don't know what to do with that message");
    }
  }
}
