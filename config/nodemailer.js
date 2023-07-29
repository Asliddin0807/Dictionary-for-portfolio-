//user: "kutubxona655@gmail.com",
//pass: "afrbijcfijrbmhzk"
const nodemailer = require('nodemailer')
const asyncHandler = require('express-async-handler')
const Client = require('../models/auth')


const forgetPass = asyncHandler(async(date, req, res) => {
    var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kutubxona655@gmail.com',
        pass: 'afrbijcfijrbmhzk'
    }
    });  
    var mailOptions = {
        from: date.from,
        to: date.to,
        subject: date.subject,
        text: date.text
    };
    transporter.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
        } else {
            console.log('Email sent: ' + info.response);
        }
    });
})

module.exports = forgetPass


// "Hey🤫🤐👇🏼✍️👨‍💻<kutubxona655@gmail.com>"