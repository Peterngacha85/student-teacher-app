const express = require('express');
const router = express.Router();
const { registerTeacher,loginTeacher } = require('../controllers/teacherController');

// POST /api/teachers/register
router.post('/register', registerTeacher);

// login
router.post('/login', loginTeacher);




module.exports = router;
