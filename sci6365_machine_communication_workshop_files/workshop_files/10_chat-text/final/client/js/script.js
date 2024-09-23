// We can define here the behavior for the elements on the website...

// Fetch DOM elements
const serverAddress = document.getElementById('server-address');
const connectButton = document.getElementById('connect-button');
const connectionStatus = document.getElementById('connection-status');
const chatContent = document.getElementById('chat-content');
const nameInput = document.getElementById('name-input');
const messageInput = document.getElementById('message-input');

// Define a global WS object
let ws = undefined;

/**
 * Attach behavior to the connect button
 * @param {*} e 
 */
connectButton.onclick = (e) => {
  // Update UI
  const address = serverAddress.value;
  connectionStatus.innerText = `Trying to connect to ${address}...`;

  // Establish WS connection
  ws = new WebSocket("ws://" + serverAddress.value);

  // What to do when connection is established
  ws.onopen = event => {
    // Update UI
    connectionStatus.innerText = `Connected!`;

    // // Optionally, send an initial message
    // const msg = {
    //   name: nameInput.value,
    //   message: "I just connected!"
    // };
    // ws.send(JSON.stringify(msg));
  }

  // What to do when receiving a message from the server
  ws.onmessage = event => {
    // Convert the message to JSON
    const jsonData = JSON.parse(event.data);

    // Handle the reception of the data 
    addReceivedMessage(jsonData);
  }
}


/**
 * Attach typing behavior to the message input box
 * @param {*} e 
 */
messageInput.onkeydown = (e) => {
  if (!e) e = window.event;

  // Only trigger an action when 'Enter' is pressed
  const keyCode = e.code || e.key;
  if (keyCode == 'Enter') {
    // Create a JSON object with the data to send to the server
    const data = {
      name: nameInput.value,
      message: messageInput.value
    };
    console.log("Sending:");
    console.log(data);

    // Send it to the server
    sendMessage(data);

    // Cleat content from input box
    messageInput.value = "";
  }
}

/**
 * A function to handle how to send data to the server
 * @param {*} data 
 */
const sendMessage = (data) => {
  // For the time being, just pretend we received it 
  // from the server as-is. 
  // addReceivedMessage(data);

  // Send data to WS server
  ws.send(JSON.stringify(data));
}

/**
 * A function to handle what to do with data received
 * from the server
 * @param {*} data 
 */
const addReceivedMessage = (data) => {
  console.log("Received: ");
  console.log(data);

  // Create an HTML paragraph element with 
  // custom formatted text 
  const p = document.createElement('p');
  p.innerHTML = `${data['name']}: ${data['message']}`;

  // Add the paragraph to the end of the chat content
  chatContent.appendChild(p);

  // Scroll the chat content to the bottom
  chatContent.scrollTop = chatContent.scrollHeight;
}




