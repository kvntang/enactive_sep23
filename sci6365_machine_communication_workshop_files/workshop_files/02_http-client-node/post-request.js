const endPoint = 'http://127.0.0.1:5566/arithmetic/sum';

const reqBody = {
  a: 10,
  b: 5
};

const reqParams = {
  method: 'POST', 
  headers: {
    'Content-Type': 'application/json',
  },
  body: JSON.stringify(reqBody)
}

// Start request.
fetch(endPoint, reqParams)
  .then(res => res.json())
  .then(json => console.log(json));
