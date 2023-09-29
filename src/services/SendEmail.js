import nodemailer from 'nodemailer'

async function SendEmail(to,subject,html){
const transporter = nodemailer.createTransport({
  service:'Gmail',
  secure: true,
  auth: {
    user: process.env.SENDEMAIL,
    pass: process.env.SENDPASSWORD,
  },
});

  const info = await transporter.sendMail({
    from: `"Ramez 👻" <${process.env.SENDEMAIL}>`, // sender address
    to, // list of receivers
    subject, // Subject line
    html, // html body
  });
}


export default SendEmail;