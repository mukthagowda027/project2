const express = require('express');
const router = express.Router();
const formidable = require('express-formidable');

const Vendor = require('../models/vendorschema');
const Product = require('../models/productschema');
const User=require('../models/userschema');

router.post('/create',formidable(), async (req, res) => {
  try {
    const { user,companyName,description,contactInfo,socialMedia } = req.fields;
    const existingVendor = await Vendor.findOne({ user });

    if (existingVendor) {
      return res.json('Vendor already exists for this user')
    }

    const socialMediaObj = socialMedia || {};

    const vendor = await Vendor.create({
      user,
      companyName,
      description,
      contactInfo: {
        email: contactInfo.email,
        phoneNumber: contactInfo.phoneNumber,
        address: contactInfo.address,
      },
      socialMedia: {
        facebook: socialMediaObj.facebook || '',
        twitter: socialMediaObj.twitter || '',
        instagram: socialMediaObj.instagram || '',
      },
    });

    await User.findByIdAndUpdate(user, { $set: { role: 'vendor', vendorId: vendor._id } });

     res.json(vendor);
    } 
    catch (error) {
        res.status(500).json({ error: error.message });
    }
});

router.get('/vendor/:vendorId', async (req, res) => {
  try {
    const vendorId = req.params.vendorId;

    const vendor = await Vendor.findById(vendorId);

    if (!vendor) {
      return res.status(404).json({ error: 'Vendor not found' });
    }

    await vendor.populate('products').execPopulate();

    res.json(vendor.products);

  } 
  catch (error) {
    res.status(500).json({ error: error.message });
  }
});

  
  

module.exports = router;
