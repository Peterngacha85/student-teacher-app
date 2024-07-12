const express = require('express');
const router = express.Router();
const questionController = require('../controllers/questionController');

// POST /api/questions/create
router.post('/create', questionController.createQuestions);

// GET /api/questions/:subject
router.get('/:subject', questionController.getQuestionsBySubject);

module.exports = router;
