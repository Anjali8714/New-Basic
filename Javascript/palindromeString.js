// const input = ["malayalam","deed","hello","peep","jump"];
// let palinarr= [];
// for(let i = 0; i< input.length;i++){
//     if()
// }
// console.log(input);

function Palinedrome(input) {
    let arrayPalin = [];
    for (let i = 0; i < input.length; i++) {
      //    let  revpalin = input[i].map(str => str.split('').reverse().join(''));
      let revpalin = input[i].split("").reverse().join("");
  
      if (input[i] === revpalin) {
        arrayPalin.push(input[i]);
      }
    }
    return arrayPalin;
  }
  
  console.log(Palinedrome(["malayalam", "deed", "hello", "peep", "jump"]));
  