const cron = require('node-cron');
const express = require('express');
const nodemailer = require('nodemailer');

// Create an instance of Express
app = express();

let mailOptions = {
  from: '<FROM_EMAIL_ADDRESS>',
  to: '<TO_EMAIL_ADDRESS>',
  subject: 'Email from Node-App: A Test Message!',
  text: 'Some content to send',
  html: '<b>The html content</b>',
};

// Mail transport configuration
let transporter = nodemailer.createTransport({
  service: 'gmail',

  auth: {
    user: '<FROM_EMAIL_ADDRESS>',
    pass: '<FROM_EMAIL_PASSWORD>',
  },
  tls: {
    rejectUnauthorized: false,
  },
});

cron.schedule('* * * * *', function () {
  console.log('---------------------');
  console.log('Running Cron Process');

  // Delivering mail with sendMail method
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) console.log(error);
    else console.log('Email sent: ' + info.response);
  });
});

app.listen(3000);
