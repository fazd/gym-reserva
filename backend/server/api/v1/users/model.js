const mongoose = require('mongoose');
const { default: validator } = require('validator');
const { body } = require('express-validator');

const { Schema } = mongoose;

const fields = {
  cedula: {
    type: String,
    required: true,
    trim: true,
    maxlength: 64,
    unique: true,
  },
};

const user = new Schema(fields, {
  timestamps: true,
});

const sanitizers = [body('cedula').isNumeric()];

module.exports = {
  Model: mongoose.model('user', user),
  fields,
  sanitizers,
};
