const http=require('http');
const fs=require("fs");

const server=http.createServer((request,response)=>
{
   const data= fs.readFileSync(`${__dirname}/UserApi/userapi.json`,"utf-8");

           //suppose we fetch only some content from the api
      const objdata=JSON.parse(data);
    //   console.log(data);
    //   response.end(objdata[0].description);

if(request.url=='/')
{
 response.end("hello from the the home side");
}
else if(request.url=='/userapi')
{
  response.writeHead(200,{"Content-type":"application/json"})
    // response.end(objdata);
    console.log(objdata);
}
else
{
    response.writeHead(404,{"Content-type":"text/html"});
    response.end("<h4>404 error page does not exist</h4>");
}
})
server.listen(8000,"127.0.0.1",()=>
{
    console.log("listening to the port number 8000")
});