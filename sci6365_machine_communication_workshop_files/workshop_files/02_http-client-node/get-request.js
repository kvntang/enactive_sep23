const endPoint = 'http://127.0.0.1:5566/hello';

const reqParams = {
  method: 'GET', 
}

// Start request.
fetch(endPoint, reqParams)
  .then(res => res.text())
  .then(txt => console.log(txt));
