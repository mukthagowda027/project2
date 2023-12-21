const express = require('express');
const router = express.Router();
const formidable = require('express-formidable');
const Cart = require('../models/cartschema');
const Product = require('../models/productschema');

router.post('/add-to-cart', formidable(), async (req, res) => {
  try {
    const { user, items } = req.fields;

    let cart = await Cart.findOne({ user });

    if (!cart) {
      cart = await Cart.create({ user, items: [] });
    }

    const itemsArray = Array.isArray(items) ? items : [items];

    for (const item of itemsArray) {
      const { product: productId, quantity } = item;

      const productDetails = await Product.findById(productId);

      if (!productDetails) {
        return res.status(404).json({ error: 'Product not found' });
      }

      const existingCartItem = cart.items.find(item => item.product.equals(productDetails._id));

      if (existingCartItem) {
        existingCartItem.quantity += quantity || 1;
      } else {
        cart.items.push({ product: productDetails._id, quantity: quantity || 1 });
      }
    }

    await cart.save();

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

module.exports = router;
