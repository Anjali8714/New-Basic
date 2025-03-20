// const input = "world";
// let even = [];
// let odd = [];
// let uppervalue;
// for( let i=0 ; i< input.length ; i++){
//     if(i % 2 == 0 ){
//         even.push(input[i])
//         uppervalue = even.join('').toUpperCase()
//     }else {
//         odd.push(input[i])
//     }
// }


// console.log(uppervalue);
// console.log(odd);


const input = "world";
let result = "";

for (let i = 0; i < input.length; i++) {
    if (i % 2 === 0) {
        result += input[i].toUpperCase(); // Uppercase even indices
    } else {
        result += input[i]; // Keep odd indices the same
    }
}

console.log(result); // Output: "WoRlD"
