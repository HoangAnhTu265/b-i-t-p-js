// var i = 0
// var id = setInterval(function(){
//     ++i;
//     console.log(i)
//     if(i === 10) {
//         clearInterval(id);
//     }
// },1000)




function countFrom(a,b) {
    return new Promise(function(resolve,reject){
        var id = setInterval(function(){
            console.log(b)
            --b
            if(b === a) {
                clearInterval(id)
                resolve()
            }
        },1000)
    })
}

function sayDone() {
    console.log("done") 
}
countFrom(1,5).then(sayDone)
