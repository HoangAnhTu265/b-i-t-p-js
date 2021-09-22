var request = require('request');
console.time("Time this");
request('https://randomuser.me/api/', function (error, response, body) {
  console.log('body:', body); 
});
console.timeEnd("Time this");