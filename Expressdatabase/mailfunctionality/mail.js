const nodemailer=require('nodemailer')

const sendresetpasswordemail=(name,email,resetToken)=>{

    try{
         const transporter=nodemailer.createTransport({
            host:"smtp.gmail.com",
            port:587,
            secure:false,
            requireTLS:true,
            auth:{
                user:process.env.email,
                pass:process.env.password,
            },
         })

    
         const mailOptions={
            from:process.env.email,
            to:email,
            subject:"For reseting the Password",
            html: `
            <p> ${name} you are receiving this email because you (or someone else) have requested the reset of the password for your account.</p>
            <p>Please click on the following link to complete the process:</p>
            <a href="http://localhost:3000/user/reset-password/${resetToken}">Reset Password</a>
            or copy paste "http://localhost:3000/user/reset-password/${resetToken}"
            <p>If you did not request this, please ignore this email and your password will remain unchanged.</p>
          `
         }
         transporter.sendMail(mailOptions,function(error,info){
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
