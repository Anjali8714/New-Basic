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