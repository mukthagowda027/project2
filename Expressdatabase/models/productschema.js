const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    trim: true, 
  },
  description: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0, 
  },
  category: {
    type: String,
    required: true,
    enum: ['Electronics', 'Clothing', 'Books', 'Other'], 
  },
  brand: String,
  color: String,
  size: String,
  inventory: {
    type: Number,
    default: 0, 
  },
  imageUrl: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  orders:[
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Order',
    },
  ],
});

const Product = mongoose.model('Product', productSchema);

module.exports = Product;