const nodemailer = require('nodemailer');
const handlebars = require('handlebars');
require("dotenv").config();


const sendEmail = async ({ email, source, dynamicData, subject }) => {
    console.log('process.env.GMAIL_PASSWORD', process.env.GMAIL_PASSWORD);
    try {
        const transporter = nodemailer.createTransport({
            host: 'smtp.gmail.com',
            port: 587,
            secure: false,
            tls: {
                rejectUnauthorized: false
            },
            auth: {
                user: process.env.GMAIL_USER,
                pass: process.env.GMAIL_PASSWORD,
            },
            logger: true
        });

        const template = handlebars.compile(source);
        const htmlToSend = template(dynamicData);

        await transporter.sendMail({
            from: 'chathuraperera007@gmail.com',
            to: email,
            subject: subject,
            html: htmlToSend
        })

    } catch (error) {
        console.log('error', error);
    }

}


// sendEmail();
module.exports = sendEmail;