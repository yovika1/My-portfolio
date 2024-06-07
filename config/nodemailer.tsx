import nodemailer from 'nodemailer'

const email = process.env.EMAIL;
const password = process.env.EMAIL_PASSWORD;
console.log(password)

export const transporter = nodemailer.createTransport({
    service:"gmail",
    auth: {
      user: email,
      pass: password,
    },
})

export const mailoptions = {
    from: email,
    to:email,
}


