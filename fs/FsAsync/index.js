const fs=require('fs');
// fs.writeFile("read.text","hello",(err)=>
// {
//  console.log("file is created");
//  console.log(err);
// });
// fs.appendFile("read.text","how are you",(err)=>
// {
//     console.log("task completed")
// })
// fs.readFile("read.text","utf-8",(err,data)=>
// {
//     console.log(err);
//     console.log(data);
// })
fs.unlinkSync("FsAsync/read.text");