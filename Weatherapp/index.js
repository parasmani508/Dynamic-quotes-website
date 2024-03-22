const http=require('http');
const fs=require("fs");
const request=require('requests');

const homeFile=fs.readFileSync("home.html","utf-8");

const replaceVal=(tempVal,orgVal)=>
{
   let temperature=tempVal.replace("{%tempval%}",orgVal.main.temp); 
    temperature=temperature.replace("{%tempmin%}",orgVal.main.temp_min); 
    temperature=temperature.replace("{%tempmax%}",orgVal.main.temp_max); 
    temperature=temperature.replace("{%location%}",orgVal.name); 
    temperature=temperature.replace("{%country%}",orgVal.sys.country); 
    temperature=temperature.replace("{%tempStatus%}",orgVal.weather[0].main); 

    return temperature;
}

const server=http.createServer((req,res)=>
{
    //use npm package to requests
    if(req.url=="/")
    {
    request("http://api.openweathermap.org/data/2.5/weather?q=Pune&appid=3fc37226ec81e6c9b348a89c2786fa0e")
    .on("data",function(chunk)
    {
        const objdata=JSON.parse(chunk);
        const arrData=[objdata];
        console.log(arrData);
        const realTimeData=arrData.map((val)=>
        
            replaceVal(homeFile,val)).join("");
            // console.log(val);
            res.end(realTimeData);
        })
    
    .on("end",function(err)
    {
        if(err)
        
            return console.log("Connection loss due to error",err);
            res.end();
    })
    }
})
server.listen(8000,"127.0.0.1");