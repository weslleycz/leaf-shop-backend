const nodemailer = require("nodemailer");
const SMTP_CONFIG = require("../config/smtp");
import PasswordCoops from "./templates/PasswordCoops"

const transporter = nodemailer.createTransport({
  host: SMTP_CONFIG.host,
  port: SMTP_CONFIG.port,
  secure: false,
  requireTLC: true,
  auth: {
    user: SMTP_CONFIG.user,
    pass: SMTP_CONFIG.pass,
  },
  tls: {
    rejectUnauthorized: false,
  },
});

interface bodyEmal{
  option:String,
  email:String
  code:String
}

export async function sendEmail(body:bodyEmal){
  let optionEmail;
  let mailSent;
  switch (body.option) {
    case "redefine_cooperative":
      optionEmail = {
        subject: `Redefinir senha`,
        from: `Leafshop`,
        to: body.email,
        html: PasswordCoops(body.code),
      };
      mailSent = await transporter.sendMail(optionEmail);
      break;
  }
}
