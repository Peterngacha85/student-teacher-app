const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const testSchema = new Schema({
  student_id: {
    type: Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  subject: {
    type: String,
    enum: ['Mathematics', 'English', 'Science'],
    required: true
  },
  marks: {
    type: Number,
    required: true
  }
});

const Test = mongoose.model('Test', testSchema);
module.exports = Test;
