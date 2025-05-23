let n = 15, a = 0, b = 1;
console.log(a);
console.log(b);
while (true) {
    let t = a + b;
    if (t > n) break;
    console.log(t);
    a = b;
    b = t;
}


function fibonacci(n){
    let val = [0,1];
    while(true){
    let item = val[val.length-1] + val[val.length-2];
    if(item > n) break;
    val.push(item)
    }
    return val
}

console.log(fibonacci(10))

var fib = function(n) {

    if(n === 0) return 0;
    if(n === 1) return 1;

    let a = 0 , b = 1 ;

   for(let i =2 ; i<=n ; i++) {
 
    let t = a + b;
    a = b;
    b = t;
}
    return b
}

console.log(fib(2))
