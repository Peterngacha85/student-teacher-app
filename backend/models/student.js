const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  teacher_id: {
    type: Schema.Types.ObjectId,
    ref: 'Teacher',
    required: true
  },
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  admission_number: {
    type: String,
    required: true,
    unique: true,
    default: function() {
      return `KCA/${Math.floor(100000 + Math.random() * 900000)}`;
    }
  },
  password: {
    type: String,
    required: true
  }
});

const Student = mongoose.model('Student', studentSchema);
module.exports = Student;
