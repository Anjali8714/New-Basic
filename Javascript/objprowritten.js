// Object example 

// const car = {
//     brand:"toyotta",
//     model:'corolla',
//     year:2022
// }

// accessing object properties

// const person = {
//     name:"anjali",
//     age:21,
//     isdeveloper:true,
// }
// console.log("Name :- " ,person.name);
// console.log("Age :- " ,person["age"]); //console.log("Age :- " ,person.age);
// console.log("She is developer :- " ,person.isdeveloper);



//Adding and Updating

// person.city = "Malappuram";  
// console.log("City :- " ,person.city);  //add

// person.age=22;
// console.log("age :- " ,person.age);   //update

// delete person.isdeveloper;

function trial(obj){
    console.log("Name :- " ,obj.name);
    // console.log("Age :- " ,obj["age"]);
    console.log("She is developer :- " ,obj.isdeveloper);
    console.log('City :-' , obj.city = "Malappuram");
    console.log('Updated age :-' , obj.age = 22);
    console.log('Deleted item :-' , obj.isdeveloper);
    console.log('checking for property name existance :-' ,"name" in obj );
    console.log('checking for property age existance :-' ,"age" in obj );
    console.log('checking for property salary existance :-' ,"salary" in obj );
    console.log('Nested object :-' ,obj.address.pincode );
    obj.greet();
    console.log('My skills :-' , obj.skills[2]);
    console.log('using object.keys' , Object.keys(obj));
    console.log('using object.values' , Object.values(obj));
    console.log('using object.entries' , Object.entries(obj));
}

trial( {
    name:"anjali",
    mylove:"Midhun",
    age:21,
    address:{
        city:"Malappuram",
        pincode:673314
    },
    greet:function(){
        console.log('Hello,' , this.name)
        console.log(`Hello, ${this.mylove}`)
    },
    skills:["HTML" , "CSS" , "javascript" , "React"],
    isdeveloper:true,
})


// const person ={
//     name:"Anjali",
//     greet:function(){
//         console.log('Hello' , this.name);
//     }
// }

// person.greet();

