import {transporter } from "../../config/nodemailer";

const handler= async(req,res) => {
    // console.log(req.body);
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
                from: 'Porfilio',
                to: data.email,
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
               message:error.message
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