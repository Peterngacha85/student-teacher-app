const express = require('express');
const router = express.Router();
const { registerStudent, recordTestMarks, viewStudentMarks } = require('../controllers/studentController');

// POST /api/students/register
router.post('/register', registerStudent);

// POST /api/students/record-marks
router.post('/record-marks', recordTestMarks);

// GET /api/students/view-marks/:teacher_id
router.get('/view-marks/:teacher_id', viewStudentMarks);

module.exports = router;
