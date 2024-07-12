//all students route
const express = require('express');
const router = express.Router();
const { getAllStudents } = require('../controllers/studentController');

// GET /api/students
router.get('/allStudents', getAllStudents);

module.exports = router;



