require('dotenv').config();
const express=require('express');

const app=express();
const port=process.env.APIPORT;

const routes=require('./routes/route');
const productsroutes=require('./routes/productroute');
const orderRoutes=require('./routes/orderroute')

app.use("/api",routes);
app.use("/products",productsroutes);
app.use('/orders', orderRoutes);


app.listen(port,()=>{
    console.log(`server is running at ${port} port`)
})