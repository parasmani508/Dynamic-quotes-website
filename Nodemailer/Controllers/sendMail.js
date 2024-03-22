const nodemailer = require("nodemailer");
const sendMail=async(req,res)=>
{
let testAccount=await nodemailer.createTestAccount();
//connect with the smpt 
let transport=await nodemailer.createTransport({
    host: "smtp.ethereal.email",
  port: 587,
  secure: false, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: 'jeffrey19@ethereal.email',
    pass: 'J8Z5sqSQzVnTfH27hT'
  },
});
 
let info=await transport.sendMail({
    from: '"Paras mani 👻" <paras@gmail.com>', // sender address
    to: "pparul423@gmail.com", // list of receivers
    subject: "Hello ✔", // Subject line
    text: "Hello parul?", // plain text body
    html: "<b>Hello ji?</b>", // html body
});
console.log("Msge sent:%s",info.messageId);
res.json(info);

 res.send("i am sending mail")
}
module.exports=sendMail;