require('dotenv').config({ path: '../.env' });

const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');

const transporter = nodemailer.createTransport(mailGun({
    auth: {
        api_key: process.env.EMAIL_API_KEY,
        domain: process.env.EMAIL_DOMAIN
    }
}));

const sendEmail = (cliente_email, titulo, mensagem) => {
    transporter.sendMail(
        {
            from: process.env.EMAIL_FROM,
            to: cliente_email,
            subject: titulo,
            text: mensagem
        },
        (error) => {
            return error;
        }
    );
};

module.exports = sendEmail;