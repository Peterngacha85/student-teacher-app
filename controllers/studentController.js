const Student = require('../models/student');
const Test = require('../models/test');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerStudent = async (req, res) => {
  try {
    const { teacher_id, name, email, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);
    const student = new Student({ teacher_id, name, email, password: hashedPassword });
    await student.save();
    res.status(201).json({ message: 'Student registered', student });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.recordTestMarks = async (req, res) => {
  try {
    const { student_id, subject, marks } = req.body;
    const test = new Test({ student_id, subject, marks });
    await test.save();
    res.status(201).json({ message: 'Test marks recorded', test });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

exports.viewStudentMarks = async (req, res) => {
  try {
    const { teacher_id } = req.params;
    const students = await Student.find({ teacher_id }).populate('tests');
    res.status(200).json(students);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get all students
exports.getAllStudents = async (req, res) => {
    try {
      const students = await Student.find().populate('teacher_id', 'name email');
      res.status(200).json(students);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };

