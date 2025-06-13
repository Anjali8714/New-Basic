// var robotWithString = function(s) {
//     let output = s.split("");
//     console.log(output)
//     let val = output.sort();
//     console.log(val)
//     return output
// }

// console.log(robotWithString("zza"))


var robotWithString = function(s) {
    let temp ;
    let val = s.split("");
    let first = val[0] , second = val[val.length-1];
    let mid = s.slice(1,-1)
    let res = second + mid + first
    return res
}

 console.log(robotWithString("bdda"))
 
