const mongoose = require('mongoose');

const staffSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    unique: true,
    required: true,
    validate: {
      validator: function (value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(value);
      },
      message: 'Invalid email address',
    },
  },
  password: {
    type: String,
    required: true,
    validate: {
      validator: function (value) {
        return value.length >= 8;
      },
      message: 'Password must be at least 8 characters',
    },
  },
  role: {
    type: String,
    enum: ['admin', 'moderator', 'support'],
    default: 'support',
  },
});

const Staff = mongoose.model('Staff', staffSchema);

module.exports = Staff;
