function largestnum(a,b,c){
    if(a >=b && a>=c){
        return `a is grater than b and c`
    }else if(b>=a && b>=c){
        return `b is grater than a and c`
    }else{
        return `c is grater than a and b`
    }
    
 
}

console.log(largestnum(30,50,10));
