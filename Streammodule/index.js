const fs=require("fs");
const http=require("http");
const server=http.createServer();

server.on("request",(req,res)=>
{
//1st way of streaming
//  fs.readFile("input.txt",(err,data)=>
//  {
//     if(err)
//     return
//         console.log(err);
//         res.end(data.toString());
//  })

//Second way for streaming
//Reading from a stream
//Cfeate a redable Stream
// Handle stream events->DataTransfer,end,error
 const rstream=fs.createReadStream("input.txt");
//  rstream.on('data',(chunkdata)=>
//  {
//   res.end(chunkdata);
//  });
//  rstream.on('end',()=>
//  {
//     res.end();
//  })

//3rd way for streaming
rstream.pipe(res);


})
server.listen(8000,"127.0.0.1");