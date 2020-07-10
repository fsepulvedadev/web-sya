const { Router } = require('express');
const nodemailer = require('nodemailer');
const router = Router();


router.post('/send-email', async (req,res) => {
    const {Nombre, Apellido, Email, message} = req.body
    res.redirect('/success.html')

    
    contentHTML = `
        <h1> User Information </h1>
        <ul>
            <li> Nombre: ${Nombre}</li>
            <li> Apellido: ${Apellido}</li>
            <li> Email: ${Email}</li>
            
         </ul>
         <p><b> Mensaje:</b> ${message}</p>   
            
         `;
        
         const transporter = nodemailer.createTransport({
             host: 'smtp.flockmail.com',
             port: 465,
             secure: true,
             auth: {
                 user: 'panchi@panchi.tech',
                 pass: 'orejas123'
             },
             tls: {
                 rejectUnauthorized: false
             }

         });
         
         await transporter.sendMail({
             from: "'Panchi' <panchi@panchi.tech>",
             to: 'panchinrc1993@gmail.com',
             subject: 'Contacto Web SyA',
             html: contentHTML
         });
         console.log('Message sent');
});

module.exports = router;