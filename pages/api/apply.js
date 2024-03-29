import nodemailer from 'nodemailer';
export default async (req, res) => {
  const { name, email, message } = req.body;
  const transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    auth: {
      user: 'mufaqar@gmail.com',
      pass: 'sfrhpeyvmjcphjeq',
    },
  });

  try {
    await transporter.sendMail({
      from: 'support@tempire.space',
      to: 'support@tempire.space',
      subject: `Inquire   from ${name}`,
      html: `<p>You have a contact form submission</p><br>
      <p><strong>Name: </strong> ${name}</p><br>   
      <p><strong>Email: </strong> ${email}</p><br>
          <p><strong>Message: </strong> ${message}</p><br>
        `,
    });
  } catch (error) {
    return res.status(500).json({ error: error.message || error.toString() });
  }
  return res.status(200).json({ error: '' });
};
