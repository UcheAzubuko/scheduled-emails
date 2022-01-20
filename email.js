const nodemailer = require('nodemailer');

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

transporter.sendMail(mailOptions, (error, info) => {
  if (error) console.log(error);
  else console.log('Email sent: ' + info.response);
});
