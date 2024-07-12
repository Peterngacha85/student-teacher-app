const Question = require('../models/question');

// Create questions and insert them into the database
exports.createQuestions = async (req, res) => {
  try {
    const questions = [
      // Mathematics Questions
      {
        subject: 'Mathematics',
        text: 'What is 2 + 2?',
        options: [
          { text: '3', isCorrect: false },
          { text: '4', isCorrect: true },
          { text: '5', isCorrect: false },
          { text: '6', isCorrect: false }
        ]
      },
      {
        subject: 'Mathematics',
        text: 'What is the square root of 16?',
        options: [
          { text: '2', isCorrect: false },
          { text: '4', isCorrect: true },
          { text: '8', isCorrect: false },
          { text: '16', isCorrect: false }
        ]
      },
      // Add 3 more Mathematics questions
      {
        subject: 'Mathematics',
        text: 'What is 3 * 3?',
        options: [
          { text: '6', isCorrect: false },
          { text: '9', isCorrect: true },
          { text: '12', isCorrect: false },
          { text: '15', isCorrect: false }
        ]
      },
      {
        subject: 'Mathematics',
        text: 'What is 12 / 4?',
        options: [
          { text: '2', isCorrect: false },
          { text: '3', isCorrect: true },
          { text: '4', isCorrect: false },
          { text: '6', isCorrect: false }
        ]
      },
      {
        subject: 'Mathematics',
        text: 'What is 5 + 7?',
        options: [
          { text: '10', isCorrect: false },
          { text: '11', isCorrect: false },
          { text: '12', isCorrect: true },
          { text: '13', isCorrect: false }
        ]
      },
      // English Questions
      {
        subject: 'English',
        text: 'What is the synonym of "happy"?',
        options: [
          { text: 'Sad', isCorrect: false },
          { text: 'Joyful', isCorrect: true },
          { text: 'Angry', isCorrect: false },
          { text: 'Tired', isCorrect: false }
        ]
      },
      {
        subject: 'English',
        text: 'What is the antonym of "fast"?',
        options: [
          { text: 'Slow', isCorrect: true },
          { text: 'Quick', isCorrect: false },
          { text: 'Rapid', isCorrect: false },
          { text: 'Speedy', isCorrect: false }
        ]
      },
      // Add 3 more English questions
      {
        subject: 'English',
        text: 'What is the correct past tense of "go"?',
        options: [
          { text: 'Goed', isCorrect: false },
          { text: 'Went', isCorrect: true },
          { text: 'Gone', isCorrect: false },
          { text: 'Going', isCorrect: false }
        ]
      },
      {
        subject: 'English',
        text: 'Which word is a noun?',
        options: [
          { text: 'Run', isCorrect: false },
          { text: 'Beautiful', isCorrect: false },
          { text: 'Cat', isCorrect: true },
          { text: 'Quickly', isCorrect: false }
        ]
      },
      {
        subject: 'English',
        text: 'What is the plural of "mouse"?',
        options: [
          { text: 'Mouses', isCorrect: false },
          { text: 'Mice', isCorrect: true },
          { text: 'Mouse', isCorrect: false },
          { text: 'Meese', isCorrect: false }
        ]
      },
      // Science Questions
      {
        subject: 'Science',
        text: 'What planet is known as the Red Planet?',
        options: [
          { text: 'Earth', isCorrect: false },
          { text: 'Mars', isCorrect: true },
          { text: 'Jupiter', isCorrect: false },
          { text: 'Saturn', isCorrect: false }
        ]
      },
      {
        subject: 'Science',
        text: 'What is H2O?',
        options: [
          { text: 'Oxygen', isCorrect: false },
          { text: 'Hydrogen', isCorrect: false },
          { text: 'Water', isCorrect: true },
          { text: 'Carbon Dioxide', isCorrect: false }
        ]
      },
      // Add 3 more Science questions
      {
        subject: 'Science',
        text: 'What force keeps us on the ground?',
        options: [
          { text: 'Magnetism', isCorrect: false },
          { text: 'Gravity', isCorrect: true },
          { text: 'Friction', isCorrect: false },
          { text: 'Electricity', isCorrect: false }
        ]
      },
      {
        subject: 'Science',
        text: 'What is the chemical symbol for gold?',
        options: [
          { text: 'Au', isCorrect: true },
          { text: 'Ag', isCorrect: false },
          { text: 'Pb', isCorrect: false },
          { text: 'Fe', isCorrect: false }
        ]
      },
      {
        subject: 'Science',
        text: 'What gas do plants absorb from the atmosphere?',
        options: [
          { text: 'Oxygen', isCorrect: false },
          { text: 'Carbon Dioxide', isCorrect: true },
          { text: 'Nitrogen', isCorrect: false },
          { text: 'Hydrogen', isCorrect: false }
        ]
      }
    ];

    await Question.insertMany(questions);
    console.log('Questions created successfully'); // Logging for debugging
    res.status(201).json({ message: 'Questions created' });
  } catch (error) {
    console.error('Error creating questions:', error.message); // Logging for debugging
    res.status(400).json({ error: error.message });
  }
};

// Get all questions by subject
exports.getQuestionsBySubject = async (req, res) => {
  try {
    const { subject } = req.params;
    console.log(`Fetching questions for subject: ${subject}`); // Logging for debugging
    const questions = await Question.find({ subject });
    console.log(`Found questions: ${questions}`); // Logging for debugging
    res.status(200).json(questions);
  } catch (error) {
    console.error('Error fetching questions:', error.message); // Logging for debugging
    res.status(400).json({ error: error.message });
  }
};
