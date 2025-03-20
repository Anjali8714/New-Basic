const arr = [30,2,-5,100,10];
let sortedValue = arr.toSorted((a,b) => a-b); // does not mute/change the original array
// let sortedValue = arr.sort((a,b) => a-b); //mute/change the original array
console.log("Sorted Value",sortedValue);
console.log("Largest Value",sortedValue.at(-1));
