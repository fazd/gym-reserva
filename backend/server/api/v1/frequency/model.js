const mongoose = require('mongoose');
const { body } = require('express-validator');

const { Schema } = mongoose;

const fields = {
  sede: {
    type: String,
    required: true,
    trim: true,
  },
  dayState: {
    type: Array,
    required: true,
  },
  startDate: {
    type: Date,
    required: true,
  },
  endDate: {
    type: Date,
    required: true,
  },
  hour: {
    type: Number,
    required: true,
  },
};

const references = {
  userId: {
    type: Schema.Types.ObjectId,
    ref: 'user',
    required: true,
  },
};

const sanitizers = [
  body('sede').escape(),
  body('dayState').isArray(),
  body('startDate').isDate(),
  body('endDate').isDate(),
  body('hour').isInt(),
];

const frequency = new Schema(Object.assign(fields, references), {
  timestamps: true,
});

module.exports = {
  Model: mongoose.model('frequency', frequency),
  fields,
  references,
  sanitizers,
};
