//access server directly without browser

// const url = "http://127.0.0.1:5566/hello";

// const url = "//http://192.168.0.116:5566/hello";

const url = "http://192.168.0.119:5566/sum";

//GET REQUEST////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// const reqParams = {
//     method: 'GET'
// }

// fetch(url, reqParams)
//     .then(res => res.text()) //how to handle response
//     .then(txt => console.log(txt))



//POST REQUEST///////////////////////////////////////////////////////////////////////////////////////////////////////////////
const reqBody = { //a JSON object
    a: 100,
    b: 225
}

const reqParams = {
    method: 'POST',
    headers : {
        'Content-Type': 'application/json'
    }, 
    body: JSON.stringify(reqBody) //can only handle string
}

//getting the answer back
fetch(url, reqParams)
    .then(res => res.json()) //how to handle response
    .then(json => console.log(json))


console.log("I just started a request to" + url);