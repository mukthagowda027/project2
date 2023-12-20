require('dotenv').config();
const express=require('express');

const app=express();
const port=process.env.APIPORT;

const routes=require('./routes/route')

app.use("/api",routes)

app.listen(port,()=>{
    console.log(`server is running at ${port} port`)
})