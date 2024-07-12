import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import StudentList from './components/StudentList';
import QuestionList from './components/QuestionList'; // Import QuestionList component

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/students" element={<StudentList />} />
        {/* Add routes for different subjects */}
        <Route path="/questions/mathematics" element={<QuestionList subject="Mathematics" />} />
        <Route path="/questions/english" element={<QuestionList subject="English" />} />
        <Route path="/questions/science" element={<QuestionList subject="Science" />} />
      </Routes>
    </Router>
  );
}

export default App;
