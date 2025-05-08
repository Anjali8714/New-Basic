const p1 = new Promise((resolve) => setTimeout(()=>resolve("Task 1"),1000));
const p2 = new Promise((resolve) => setTimeout(()=>resolve("Task 2"),2000));
const p3 = new Promise((resolve) => setTimeout(()=>resolve("Task 2"),1500));

Promise.all([p1,p2,p3])
.then((results)=>console.log(results))
.catch((error)=>console.log("Error:",error));

const p4=new Promise((resolve) =>setTimeout(()=>resolve("Task1"),1000));
const p5=new Promise((reject)=>setTimeout(()=>reject("Task 2 failed"),1500));
const p6=new Promise((resolve)=>setTimeout(()=>resolve("Task3"),2000));

Promise.all([p4,p5,p6])
.then((results)=>console.log("All results:",results))
.catch((error)=>console.log("Error:",error))