const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const optionSchema = new Schema({
  text: {
    type: String,
    required: true
  },
  isCorrect: {
    type: Boolean,
    required: true
  }
});

const questionSchema = new Schema({
  subject: {
    type: String,
    enum: ['Mathematics', 'English', 'Science'],
    required: true
  },
  text: {
    type: String,
    required: true
  },
  options: [optionSchema]
});

const Question = mongoose.model('Question', questionSchema);
module.exports = Question;
