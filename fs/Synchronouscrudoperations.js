//Challenge time
//CRUD in Nodejs
//Create a folder name it myfolder
//Create a file name it myfile and data into it
//Add more data into into  the file at the end of the existing data
// Read the the data of the file without gettingb buffer data
//Rename the file
//Now delete the file and folder both

const fs=require("fs");
// fs.mkdirSync("crud");
// fs.writeFileSync("crud/new","hello");
// fs.appendFileSync("crud/new","how are you");
// const data=fs.readFileSync("crud/new","utf-8");
// console.log(data);
// fs.unlinkSync("crud/newone");
fs.renameSync("crud/new","crud/newone")
fs.rmdirSync("crud");
