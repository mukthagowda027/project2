const express=require('express');
const formidable=require('express-formidable');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');
const nodemailer=require('nodemailer');
const randomstring=require('randomstring');

const router=express.Router();

let sendresetpasswordemail=require("../mailfunctionality/mail.js")
let User=require('../models/userschema.js');
const { route } = require('./vendorroute.js');

router.post('/register',formidable(),async function(req,res)
{
    const { fields } = req;
    console.log('req.fields:', req.fields);


    let {username,email,password}=fields;
    if(!(username && email && password))
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
                username:username,
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
    console.log(req); 
    console.log(req.fields); 
    let {email}=req.fields;
    
    try {
        const user = await User.findOne({ email });
    
        if (user) 
        {
            const resetToken=randomstring.generate()
            await User.findByIdAndUpdate(user, { $set: {resetToken:resetToken} });
            await sendresetpasswordemail(user.username, user.email, resetToken);
            res.status(200).send({msg:"please check your inbox of mail and reset password"});
        }
        else{
            return res.status(404).send("user not found")
        }}
        catch(error)
        {
            res.status(200).send({msg:error.message})
        }
});

router.post("/reset-password/:token",formidable(),async function(req,res){
   try{
    const resetToken = req.params.token;
        const tokenData=await User.findOne({resetToken});
        if(tokenData)
        {
            const password=req.fields.password;
            const newpassword=await bcrypt.hash(password, 10);
            const userData=await User.findByIdAndUpdate({_id:tokenData._id},{$set:{password:newpassword}},{new:true})
            res.status(200).send({msg:"user password has been reset",data:userData})
        }
        else
        {
            res.status(200).send({msg:"This link has been expired"})
        }
   }
   catch{

   }
})

module.exports=router;