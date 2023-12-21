const express = require('express');
const router = express.Router();
const formidable = require('express-formidable');

const Vendor = require('../models/vendorschema');
const Product = require('../models/productschema');
const User=require('../models/userschema');

router.post('/create',formidable(), async (req, res) => {
  try {
    const { user } = req.fields;
    const existingVendor = await Vendor.findOne({ user });

    if (existingVendor) {
      return res.json('Vendor already exists for this user')
    }

    const vendor = await Vendor.create({
      user,
      products: [],
    });

    await User.findByIdAndUpdate(user, { $set: { role: 'vendor', vendorId: vendor._id } });

     res.json(vendor);
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});


router.post('/add-product',formidable(), async (req, res) => {
    try {
      const { user, productInfo } = req.fields;
  
      const vendor = await Vendor.findOne({ user });
  
      if (!vendor) {
        return res.status(404).json({ error: 'Vendor not found' });
      }
  
      let existingProduct = await Product.findOne({ name: productInfo.name });
  
      if (!existingProduct) {
        existingProduct = await Product.create(productInfo);
      }
  
      vendor.products.push(existingProduct._id);
      await vendor.save();
  
      res.json(vendor);

    } 
    catch (error) {
      res.status(500).json({ error: error.message });
    }
  });
  


router.get('/get-products/:vendorId', formidable(),async (req, res) => {
  try {
    const { vendorId } = req.params;

    const vendor = await Vendor.findById(vendorId).populate('products');

    if (!vendor) {
      return res.status(404).json({ error: 'Vendor not found' });
    }

    res.json(vendor.products);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
