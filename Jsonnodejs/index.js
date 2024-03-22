const fs=require("fs");
const biodata={
    name:"Paras",
    age:21,
    msge:"hello"
}
// console.log(biodata.msge);
//stringify is used to convert object data into json
// const jsonData=JSON.stringify(biodata);
// console.log(jsonData);

// to convert json data into obect
// const objdata=JSON.parse(jsonData);
// console.log(objdata);


//To convert into json
//Add into another file using nodejs module
//Readfile
//Again convert back to js object 

// const jsonData=JSON.stringify(biodata);
// fs.writeFile("json1.json",jsonData,(error)=>
// {
//     console.log("done");
// });

fs.readFile("json1.json","utf-8",(err,data)=>
{
//  console.log(data);
const orgdata=JSON.parse(data);
console.log(orgdata);
})
