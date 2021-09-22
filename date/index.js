var moment = require("moment")

// var now = new Date();
// console.log(now.getTime())

// var myBirthday =  new Date(2004,05,26)
// console.log(myBirthday)

var now = moment("2021-09-05 06:00");
console.log(now.fromNow())