const axios = require('axios').default;
// const fs = require('fs');

url1 = "https://jsonplaceholder.typicode.com/todos/1"
url2 = "https://jsonplaceholder.typicode.com/todos/2"

function getData() {
var a = axios.get(url1).then(function(response){
    console.log(response.data)
}).catch(function(err){
    console.log(err)
})

var b = axios.get(url2).then(function(response){
    console.log(response.data)
}).catch(function(err){
    console.log(err)
})
return a,b;
}
getData()