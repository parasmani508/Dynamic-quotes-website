const EventEmitter=require("events");
const event =new EventEmitter();
//.on is used for listen
// event.on("hello",()=>
// {
//     console.log("paras")
// });
// event.on("hello",()=>
// {
//     console.log("kumar")
// });
// event.on("hello",()=>
// {
//     console.log("mani")
// });
event.on("checkpage",(sc,msg)=>
{
    console.log(`status code is ${sc} and page is ${msg}`)

})
// event.emit("hello");
event.emit("checkpage",200,"ok");
//we cannot define emit before listening events beacuse emmiter objects emit named events that causes previously 
//registered listeners to be called.
//So an emmiter object basically has two features
//Emmiting name events
//Registering and unregistering listeners functions