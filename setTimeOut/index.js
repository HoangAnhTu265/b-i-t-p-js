// setTimeout(function() {
//     console.log("done")
// },1000);

var done = function() {
    console.log("finish")
}

console.log("start")
var timeoutId = setTimeout(done,2000)
console.log("done")
// clearTimeout(timeoutId)