import {transporter } from "../../config/nodemailer";

const handler= async(req:any,res:any) => {
    console.log(req.body);
    if (req.method === 'POST') {
        const data = req.body;
        if (!data.name || !data.email || !data.subject || !data.message) {
            return res.status(400)
            .json({
                message:'please fill all the fields'

            })
        }
        try {
            await transporter.sendMail({
                from: 'Portfolio',
                to: process.env.EMAIL,
                subject: "Hello ✔", 
                text: "Contact", 
                html: `<div>
                Name: ${data.name}<br>
                Email: ${data.email}<br>
                Subject: ${data.subject}<br>
                Message: ${data.message}<br>
                <div>`, 
            });

            return res.status(200).json({
                message:'Email has been sent'
            })
            
        } catch (error) {
            console.log(error)
           return res.status(400)
            .json({
               message:"something went wrong"
            });
        }
        
    }
    else {
        return res.status(400)
        .json({
           message:'Invalid request method'
        });
    }
   
}
export default handler;