let age = 20;
if(age>18){
    console.log( "Eligible for vote" )
}

function vote(age){
    if(age>=18){
        return "This person is eligible for vote"
    }else {
        return "This person is note eligible for vote"
    }
}
console.log(vote(56))

function grade(mark){
    if(mark >= 90){
        return "A"
    }else if(mark >= 80){
        return "B"
    }else if(mark >= 70){
        return "C"
    }else if(mark >= 60){
        return "D"
    }else if(mark >= 50){
        return "E"
    }else if(mark < 50){
        return "D"
    }else{
        return "Invalid mark" 
    }
}

console.log(grade(77))