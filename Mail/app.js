nodemailer = require("nodemailer");

var transfer = nodemailer.createTransport({
    port: 587,
    secure: false,
    requireTLS: true,
    service: "gamil" ,// sender mail servis
    auth: {//gönderecek kisinin mail bilgileri
        user:"faris38kanbur@gmail.com",
        pass:"123456789"
    }
});

var mail = {
    from: "faris38kanbur@gmail.com",
    to: "faris35kanbur@gmail.com, Ali@gmail.com",
    subject: "NodeJS and mail",
    text:"I am sending my first mail with Node Js",
    html:"<h1>HTML ile mail gönderildi </h1>",
};

transfer.sendMail(mail, function(error){
    if(error) console.log(error);
    else console.log("Your mail sending succesfully");
});