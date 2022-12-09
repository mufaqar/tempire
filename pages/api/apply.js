export default function (req, res) {
  let nodemailer = require('nodemailer');

  // step-1
  const transporter = nodemailer.createTransport({
    port: 465,
    host: 'smtp.gmail.com',
    auth: {
      user: 'gillanix007@gmail.com',
      pass: 'ewktztcrvvcudufm',
    },
    secure: true,
  });

  // step-2
  const mailData = {
    from: 'gillanix007@gmail.com',
    to: 'mufaqar@gmail.com',
    subject: `Message From ${req.body.name}`,
    text: req.body.message + ' | Sent from: ' + req.body.email,
    html: `<div>${req.body.message}</div><p>Sent from:
        ${req.body.email}</p>`,
  };

  // step-3
  transporter.sendMail(mailData, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
  res.status(200);
}
