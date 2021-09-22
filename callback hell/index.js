var fs = require('fs');

var song1 = fs.readFile('./song1.txt',{encoding: 'utf8'}, function(err,data){
    console.log(data)
    var song2 = fs.readFile('./song2.txt',{encoding: 'utf8'},function(err2,data2) {
        console.log(data2)
        var song3 = fs.readFile('./song3.txt',{encoding: 'utf8'},function(err3,data3) {
            console.log(data3)
        });
    });
});