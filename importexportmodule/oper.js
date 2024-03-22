const add=(a,b)=>
{
    return a+b;
}
const sub=(a,b)=>
{
   return a-b;
}
const mul=(a,b)=>
{
    return a*b;
}

///suppose if we have a variable 
const name ="pars";
//Afetr the equal to opertor we define the same name as we use in the function name.
// module.exports.add1=add;
// module.exports.sub1=sub;
// module.exports.mult1=mul;


//it can also be written as with the help of the object destructuring
module.exports={add,sub,mul,pars};