require('dotenv').config();
const express=require('express');

const app=express();
const port=process.env.APIPORT;

const routes=require('./routes/userroute');
const productsroutes=require('./routes/productroute');
const orderRoutes=require('./routes/orderroute')
const vendorroute=require('./routes/vendorroute')
const cartroute=require('./routes/cartroute')
const buyerroute=require('./routes/buyerroute')

app.use("/user",routes);
app.use("/products",productsroutes);
app.use('/orders', orderRoutes);
app.use('/vendors',vendorroute)
app.use('/cart',cartroute)
app.use('/buyer',buyerroute)



app.listen(port,()=>{
    console.log(`server is running at ${port} port`)
})