const express = require('express');
const connectDB = require('./config/db'); // Assuming you have a db configuration file
const cors = require('cors');
const teacherRoutes = require('./routes/teacherRoutes');
const studentRoutes = require('./routes/studentRoutes');
const questionRoutes = require('./routes/questionRoutes');
const getAllStudents = require('./routes/allStudentsRoutes');
const { authenticateToken } = require('./middlewares/auth'); // Example error handler middleware

// Initialize Express app
const app = express();

// Connect to MongoDB database
connectDB();

// Middleware
app.use(express.json()); // Parse incoming JSON requests

// In your server.js or app.js

app.use(cors());


// Routes
app.use('/api/teachers', teacherRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/questions', questionRoutes);
app.use('/api/students', getAllStudents);



// Error handling middleware (must be defined after routes)
app.use(authenticateToken);

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
