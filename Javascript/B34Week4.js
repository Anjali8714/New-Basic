//  Find the sum of unique integers from an array.

// function uniqueSum (arr){
//     let value = arr.sort((a,b) => a-b);
//     let result = value.filter((items,index) => value.indexOf(items) === index);
//     let sum = result.reduce((item,acc) => acc + item,0);
//     return sum;
// }
// console.log(uniqueSum([1, 2, 3, 4]))

// Given two strings s and t, return true if t is an anagram of s, and false otherwise.
//  Note:- An Anagram is a word or phrase formed by rearranging the letters of a
//  different word or phrase, typically using all the original letters exactly once.

// function restoreString(s ,t){
    
//     if(s.length !== t.length) return false
    
//     let sorteds = s.split('').sort().join();
//     let sortedt = t.split('').sort().join();
//     // if(sorteds === sortedt){
//     //     return true 
//     // }else {
//     //     return false
//     // }
    
//     if (sorteds === sortedt) return true
// }
// console.log( restoreString("anagram", "nagaram"));

//  Create a function that takes a string as input, it contains only the characters “i”, “d”
//  and “s”. There is a variable total (the initial value of total is 0).
//  i :- increments the value of the variable total by 1.
//  d :- decrements the value of the variable total by 1.
//  s :- squares the value of the variable total.
//  Return the final value of total after performing all the operations.

// function operations(string){
//   let total =0;
//   for(let char of string){
//       if(char === 'i'){
//           total += 1;
//       }else if(char === 'd'){
//           total -= 1;
//       }else {
//           total*=total
//       }
//   }
//   return total
// }
// console.log(operations("iiisd"));

//  Given a non-empty array of integers, every element appears twice except for one.
//  Find that single one.

// function singleNumber(array){
//     let onceanumber=[];
//     for(i=0;i<array.length;i++){
//         if(array.indexOf(array[i]) === array.lastIndexOf(array[i])){
//             onceanumber.push(array[i])
//         }
//     }
// return onceanumber
// }
// console.log(singleNumber([2, 2, 1]))

// Create the function that takes an object and returns the average of marks. 

// function getAverage(arr){
//     let red = arr.marks.reduce((item , acc) => acc + item, 0);
//     let avg = red/arr.marks.length;
//     return avg;
// }

// console.log(getAverage({name: "John", marks: [25, 45, 10, 30] }))
