const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  items:[],
  totalAmount: {
    type: Number,
    required: true,
  },
  orderDate: {
    type: Date,
    default: Date.now,
  },
  address:{
    type:String
  },
  statusofproduct:{
    type:String
  },
  paymentMode:{
    type:String
  },
  deliveryDate:{
    type:Date
  }
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
