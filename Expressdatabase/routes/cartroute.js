const express = require('express');
const router = express.Router();
const formidable = require('express-formidable');
const Cart = require('../models/cartschema');
const Product = require('../models/productschema');
const User=require('../models/userschema')

router.post('/add-to-cart', formidable(), async (req, res) => {
  try {
    const { user, items } = req.fields;

    let userd= await User.findById(user);

    if (!userd) {
      return res.status(404).json({ error: 'User not found' });
    }


    let cart = await Cart.findOne({ user });

    if (!cart) {
      cart = await Cart.create({ user, items: [] });
      await User.findByIdAndUpdate(user, { $set: { cartId: cart._id } });
    }

    const errors = [];

    for (const item of items) {
      const { product: productId, quantity } = item;

      const productDetails = await Product.findById(productId);

      if (!productDetails) {
        errors.push(`Product not found for ID: ${productId}`);
        continue;
      }

      const availableQuantity = productDetails.inventory || 0;

      if (quantity > availableQuantity) {
        errors.push(`Insufficient quantity for product: ${productDetails.name}`);
        continue; 
      }

      const existingCartItem = cart.items.find(item => item.product.equals(productDetails._id));

      if (existingCartItem) {
        existingCartItem.quantity = parseInt(existingCartItem.quantity) + quantity || 1;
      } 
      else {
        cart.items.push({ product: productDetails._id, quantity: quantity || 1 });
      }
    }

    await cart.save();

    if (errors.length > 0) {
      return res.status(400).json({ errors });
    }

    res.json(cart);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/get-cart/:userId', formidable(), async (req, res) => {
  try {
    const userId = req.query.userId;

    const cart = await Cart.findOne({ user: userId }).populate('items.product', 'name price');

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    res.json(cart);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/carttotal/:userId', formidable(), async (req, res) => {
  try {
    const userId = req.query.userId;

    const cart = await Cart.findOne({ user: userId });

    if (!cart) {
      return res.status(404).json({ error: 'Cart not found' });
    }

    const cartitems=[];

   for (const item of cart.items) {
      const product = await Product.findById(item.product);
  
      if (!product) {
        return res.status(404).json({ error: 'Product not found' });
      }
  
      cartitems.push({
        product: product._id,
        productname:product.name,
        quantity: item.quantity,
        price: product.price,
      });
  }

    const total= cartitems.reduce((total, item) => {
      return total + item.price * item.quantity;
    }, 0);

    const response = {
      cartitems,
      total,
    };

    res.json(response);
  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = router;
