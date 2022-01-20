const cron = require('node-cron');
const express = require('express');
const nodemailer = require('nodemailer');

// Create an instance of Express
app = express();

let mailOptions = {
  from: 'ucheazu97@gmail.com',
  to: 'azubukouche@yahoo.com',
  subject: 'Email from Node-App: A Test Message!',
  text: 'Some content to send',
};

// Mail transport configuration
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'ucheazu97@gmail.com',
    pass: 'fernando_9',
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

app.listen(3007);
