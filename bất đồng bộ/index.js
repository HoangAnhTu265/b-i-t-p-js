var fs = require('fs');

// console.log('start')
// var song1 = fs.readFileSync('song.txt',{encoding: 'utf-8'})
// console.log(song1)

// var song2 = fs.readFileSync('song2.txt',{encoding: 'utf-8'})
// console.log(song2)

// console.log('end')


console.log('start')
fs.readFile('song.txt',{encoding:'utf-8'},function(err,data) {
    console.log(data)
})
console.log('end')