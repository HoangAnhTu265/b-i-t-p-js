var fs = require('promise-fs')


function onDone(song) {
    console.log(song)
}

function onError(err) {
    console.log(err)
}

function readFile(path) {
    return fs.readFile(path,{encoding:'utf8'});
}

readFile('song1.txt')
.then(onDone)
.then(function(){
    return readFile('song2.txt')
})
.then(onDone)
.catch(onError)

var fs = require('fs');

function readFilePromise(path) {
    return new Promise(function(resolve,reject) {
        fs.readFile(path,{encoding:'utf-8'},function(err,data) {
            if(err) {
                reject(err)
            } else {
            resolve(data)
        }
        })
    })   
}
// readFilePromise('song1.txt')
// .then(function(song1) {
//     console.log(song1)
// })

Promise.all([
  readFilePromise('./song1.txt'),
  readFilePromise('./song2.txt')
]).then(function(value){
  console.log(value)
}).catch(function(error){
  console.log(error) // in ra loi
})
// var request = require('request');

// function load(path){
//     return new Promise(function(resolve,reject) {   // tạo đối tượng promise mới
//       request(path, function(error,response,body){
//           if(error) {
//             reject(error)
//           } else {
//             resolve(body)
//           }
        
//       })
//     })
//   }
  
//   load('https://jsonplaceholder.typicode.com/todos/1')
//   .then(function(data){
//     console.log(data)
//   })