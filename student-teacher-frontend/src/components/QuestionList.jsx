import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';

const QuestionList = ({ subject }) => {
  const [questions, setQuestions] = useState([]);

  useEffect(() => {
    const fetchQuestions = async () => {
      try {
       
        const response = await fetch(`http://localhost:5000/api/questions/${subject}`); // Adjust endpoint as per your backend API
        console.log("this is the response:",response);
        if (!response.ok) {
          throw new Error('Failed to fetch questions');
        }
        const data = await response.json();
        setQuestions(data);
      } catch (error) {
        console.error('Error fetching questions:', error);
        // Handle error state
      }
    };

    fetchQuestions();
  }, [subject]);

  return (
    <div>
      <h2>5 {subject} Questions:</h2>
      <ul>
        {questions.map((question, index) => (
          <li key={index}>
            <p>{question.text}</p>
            <ul>
              {question.options.map((option, index) => (
                <li key={index}>{option.text}</li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
      <Link to="/students">Back to Students</Link> {/* Adjust this link as per your routing */}
    </div>
  );
};

export default QuestionList;
