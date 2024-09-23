// We can define here the behavior for the elements on the website...

// Fetch DOM elements
const serverAddress = document.getElementById('server-address');
const verbSelector = document.getElementById('verb-selector')
const requestContent = document.getElementById('request-content');
const requestButton = document.getElementById('request-button');
const responseContent = document.getElementById('response-content');


// Attach click behavior to the button
requestButton.onclick = () => {
  // Give some feedback to user
  responseContent.value = "Request started...";

  // Parse request data
  const address = serverAddress.value;
  const verb = verbSelector.value;
  const content = requestContent.value;

  // Create request parameters
  const reqParams = {
    method: verb,
    headers: {
      'Content-Type': 'application/json'
    }
  }

  // If not GET, add a body to the request
  if (verb !== 'GET') {
    reqParams.body = content;
  }

  // Send the request and haldle the response
  fetch(address, reqParams)
    .then(response => response.text())
    .then(text => responseContent.value = text)
    .catch(error => responseContent.value = "An error occurred: " + error);
}