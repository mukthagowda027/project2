const express=require('express');
const formidable=require('express-formidable');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const nodemailer=require('nodemailer');
const randomstring=require('randomstring');

const router=express.Router();

let sendresetpasswordemail=require("../mailfunctionality/mail.js")
let User=require('../models/userschema.js')

router.post('/register',formidable(),async function(req,res)
{
    let {email,password}=req.fields;
    if(!(email && password))
    {
        res.status(400).send("provide all inputs")
    }
    else{
        if(await User.findOne({email}))
        {
            res.send("user already exist")
        }
        else{
            
            let enc_password = await bcrypt.hash(password, 10)
            
            let user=await User.create({
                email:email,
                password:enc_password
            })

             let token=jwt.sign({user_id:user._id,email},process.env.TOKEN_KEY,
             {expiresIn:"2h"});

             user.token=token;

                res.json(user)
        }
    }
})

router.post('/login', formidable(), async function (req, res){
    let {email,password} = req.fields
    if (! (email && password)){
        res.status(400).send('Provide all the inputs')
    }
    else{
        let user = await User.findOne({email})

        if (user && (await bcrypt.compare(password, user.password)))
        {
            let token = jwt.sign({ user_id:user._id, email},
                process.env.TOKEN_KEY,
                 { expiresIn: "5h" });

            user.token = token

            res.json(user)
        }
        else{
            res.status(403).send('Incorrect username or password!!')
        }
    }
})

router.post("/forgot-password",formidable(),async function(req,res)
{
    let {email}=req.fields;
    
    
    try {
        const user = await User.findOne({ email });
    
        if (user) 
        {
            const resetToken=randomstring.generate()
            user.resetToken = resetToken;
            console.log("Before sending reset email");
            await sendresetpasswordemail(user.name, user.email, resetToken);
            console.log("After sending reset email");

            res.status(200).send({msg:"please check your inbox of mail and reset password"})
        }
        else{
            return res.status(404).send("user not found")
        }}
        catch(error)
        {
            res.status(200).send({msg:error.message})
        }
    

});

module.exports=router;