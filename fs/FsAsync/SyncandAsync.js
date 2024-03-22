//Synchronous
const fs=require('fs');
// const data=fs.readFileSync("read.text","utf-8");
// console.log(data);

//Asynchronous
const data=fs.readFile("read.text","utf-8",(err,data)=>
{
console.log(data);
});
console.log("after the data")
