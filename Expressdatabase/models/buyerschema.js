const mongoose = require('mongoose');

const buyerSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true,
  },
  address: {
    street: String,
    city: String,
    state: String,
    postalCode: String,
    country: String,
  },
  paymentModes: [
    {
      cardNumber: String,
      cardHolderName: String,
      expirationDate: String,
    },
  ],
});

const Buyer = mongoose.model('Buyer', buyerSchema);

module.exports = Buyer;
