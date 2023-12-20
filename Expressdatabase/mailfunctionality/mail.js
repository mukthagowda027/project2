const nodemailer=require('nodemailer')

const sendresetpasswordemail=async(name,email,resetToken)=>{

    try{
         const transporter=nodemailer.createTransport({
            host:"smtp.gmail.com",
            port:587,
            secure:false,
            requireTLS:true,
            auth:{
                user:process.env.email,
                pass:process.env.password
            },
            debug: true,
         })

    

         const mailOptions={
            from:process.env.mail,
            to:email,
            subject:"For reset Password",
            html: `
            <p> ${name} You are receiving this email because you (or someone else) have requested the reset of the password for your account.</p>
            <p>Please click on the following link, or paste this into your browser to complete the process:</p>
            <a href="http://localhost:3000/reset-password/${resetToken}">Reset Password</a>
            <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>
          `
         }
         await transporter.sendMail(mailOptions,function(error,info){
            if(error)
            {
                console.log(error)
            }
            else{
                 console.log("mail has been sent",info.response)
            }
         });

    }
    catch(err)
    {
        console.log(err.message)
    }

}

module.exports=sendresetpasswordemail;
