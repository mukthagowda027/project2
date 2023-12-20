const express = require('express');
const router = express.Router();
const Order = require('../models/orderschema');
const User = require('../models/userschema');
const Product = require('../models/productschema');
const formidable=require('express-formidable')

router.post('/createorder',formidable(), async (req, res) => {
  try {
    const { user, products } = req.fields;


    const userDetails = await User.findById(user);


    let totalAmount = 0;

    for (const product of products) {
    const productDetails = await Product.findById(product.product);
    totalAmount += productDetails.price * product.quantity;
    }
      

    const order = await Order.create({
      user,
      products,
      totalAmount,
    });

    await User.findByIdAndUpdate(user, { $push: { orders: order._id } });


    for (const product of products) {
      await Product.findByIdAndUpdate(product.product, { $push: { orders: order._id } });
    }

    res.json(order);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});

module.exports = router;
