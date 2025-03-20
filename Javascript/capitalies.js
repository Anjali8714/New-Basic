const input = "my name is khan";
const splitedValue = input.split(" ");
for(let i=0;i<splitedValue.length;i++){
     splitedValue[i] = splitedValue[i][0].toUpperCase() + splitedValue[i].slice(1);
}
const result = splitedValue.join(" ");
console.log(result);
