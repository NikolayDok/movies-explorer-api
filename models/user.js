const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  email: {
    type: String,
    required: true,
    validate: {
      validator: (v) => validator.isEmail(v),
    },
    unique: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
    minlength: [8, 'Минимальная длина строки - 8 символов'],
  },
  name: {
    type: String,
    required: true,
    minlength: [2, 'Минимальная длина строки - 2 символа'],
    maxlength: [30, 'Максимальная длина строки - 30 символов'],
  },
});

module.exports = mongoose.model('user', userSchema);
