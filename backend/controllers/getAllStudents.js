//get all students and export it
const Student = require('../models/student');
exports.getAllStudents = async (req, res) => {
  try {
    const students = await Student.find();
    res.status(200).json(students);
    console.log(students);
  } catch (error) {
    res.status(400).json({ error: error.message });
    console.log(error);
  }
};  
