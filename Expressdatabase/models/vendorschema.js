const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User', 
    required: true,
  },
  companyName: {
    type: String,
    required: true,
  },
  description: String,
  products: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Product', 
    },
  ],
  contactInfo: {
    email: {
      type: String,
      required: true,
    },
    phoneNumber: String,
    address: {
      street: String,
      city: String,
      state: String,
      postalCode: String,
      country: String,
    },
  },
  socialMedia: {
    facebook: String,
    twitter: String,
    instagram: String,
  },
  rating: {
    type: Number,
    default: 0,
  },

});

const Vendor = mongoose.model('Vendor', vendorSchema);

module.exports = Vendor;
