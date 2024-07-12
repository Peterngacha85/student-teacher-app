const Teacher = require('../models/teacher');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

exports.registerTeacher = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    // Hash the password using bcrypt
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create a new instance of Teacher model with hashed password
    const teacher = new Teacher({ name, email, password: hashedPassword });

    // Save the teacher to the database
    await teacher.save();

    // Generate a JWT token for the teacher
    const token = jwt.sign({ teacherId: teacher._id }, process.env.JWT_SECRET, {
      expiresIn: '1h' // Example: Token expires in 1 hour
    });

    // Respond with a success message and the JWT token
    res.status(201).json({ message: 'Teacher registered', token });
  } catch (error) {
    // Handle errors
    res.status(400).json({ error: error.message });
  }
};

exports.loginTeacher = async (req, res) => {
    try {
        const { email, password } = req.body;
    
        // Find the teacher by email
        const teacher = await Teacher.findOne({ email });
    
        // If teacher is not found, throw an error
        if (!teacher) {
        throw new Error('Invalid email or password');
        }
    
        // Compare the password with the hashed password
        const isPasswordValid = await bcrypt.compare(password, teacher.password);
    
        // If password is invalid, throw an error
        if (!isPasswordValid) {
        throw new Error('Invalid email or password');
        }
    
        // Generate a JWT token for the teacher
        const token = jwt.sign({ teacherId: teacher._id }, process.env.JWT_SECRET, {
        expiresIn: '1h' // Example: Token expires in 1 hour
        });
    
        // Respond with a success message and the JWT token
        res.status(200).json({ message: 'Login successful', token });
    } catch (error) {
        // Handle errors
        res.status(400).json({ error: error.message });
    }
    }
