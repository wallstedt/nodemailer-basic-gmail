const nodeMailer = require('nodemailer')

// this address works because "allow less scure apps"
// has been switched on
let transporter = nodeMailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'wewillnotbechipped@gmail.com',
    pass: '' // enter pass here
  }
})

let mailOptions = {
  from: 'wewillnotbechipped@gmail.com',
  to: 'fredrik.wallstedt@gmail.com',
  subject: 'We will not be chipped!',
  text: 'testing...'
}

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    return console.log(err)
  }

  console.log('Email sent', info.response)
})
