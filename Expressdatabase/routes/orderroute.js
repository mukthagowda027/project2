const express = require('express');
const router = express.Router();
const formidable=require('express-formidable');

const Order = require('../models/orderschema');
const Product = require('../models/productschema');
const User = require('../models/userschema');
const Cart = require('../models/cartschema');
const Buyer = require('../models/buyerschema');

router.post('/placeorder',formidable(), async (req, res) => {

  try {
    const {userId} = req.fields;

    const user = await User.findById(userId);

    if (!user || !user.cartId || !user.buyerId) {
      return res.status(404).json({ error: 'User, cart, or buyer details not found for the user' });
    }

    const cart = await Cart.findById(user.cartId);

    if (!cart || cart.items.length === 0) {
      return res.status(400).json({ error: 'Cart is empty. Cannot place an order.' });
    }

    const buyer = await Buyer.findById(user.buyerId);

    if (!buyer) {
      return res.status(404).json({ error: 'Buyer details not found for the user' });
    }

  const orderItems = [];

  for (const item of cart.items) {
    const product = await Product.findById(item.product);

    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }

  orderItems.push({
    product: product._id,
    quantity: item.quantity,
    price: product.price,
  });
}

console.log('orderItems:', orderItems);


  const totalBillAmount = orderItems.reduce((total, item) => {
    return total + item.price * item.quantity;
  }, 0);

  console.log('totalBillAmount:', totalBillAmount);


    for (const item of cart.items) {
      const product = await Product.findById(item.product);
      product.inventory -= parseInt(item.quantity ,10);
      await product.save();
    }

    const deliveryDate = new Date();
    deliveryDate.setDate(deliveryDate.getDate() + 7);

    const order = await Order.create({
      user: userId,
      items: orderItems,
      address: buyer.address,
      paymentModes: buyer.paymentModes,
      totalAmount: totalBillAmount,
      deliveryDate: deliveryDate, 
      statusofproduct:'shipping'
    });

  user.orders.push(order._id);
  await user.save();

  cart.items = [];
  await cart.save();

  for (const item of orderItems) {
    const product = await Product.findById(item.product);
  
    if (!product) {
      return res.status(404).json({ error: 'Product not found' });
    }
  
    product.orders.push(order._id);
    await product.save();
  }

  const billResponse = {
    order: order._id,
    address: buyer.address,
    totalBill: totalBillAmount,
    deliveryDate: deliveryDate.toISOString(),
    items: orderItems,
  };

  res.json(billResponse);

  console.log('order placed')

  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.post('/cancelorder',formidable(), async (req, res) => {
  try {
    
    const { userId, orderId } = req.fields;

    const user = await User.findById(userId);

    if (!user) {
      return res.status(404).json({ error: 'User not found' });
    }

    const order = await Order.findById(orderId);

    if (!order) {
      return res.status(404).json({ error: 'Order not found' });
    }

    if (order.statusofproduct !== 'shipping') {
      return res.status(400).json({ error: 'Cannot cancel order. Status is not pending.' });
    }

    for (const item of order.items) {
      const product = await Product.findById(item.product);

      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }

      product.inventory += item.quantity;
      await product.save();
    }

    order.statusofproduct= 'cancelled';
    await order.save();

    res.json({ message: 'Order cancelled successfully' });
  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
