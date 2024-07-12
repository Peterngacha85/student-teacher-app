import React, { useEffect, useState } from 'react';
import axios from 'axios';

const StudentList = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const { data } = await axios.get('http://localhost:5000/api/students/allStudents');
        setStudents(data);
      } catch (error) {
        console.error('Error fetching students:', error);
      }
    };

    fetchStudents();
  }, []);

  return (
    <div>
      <h1>All Students</h1>
      {students.map(student => (
        <div key={student._id}>
          <h2>{student.name}</h2>
          <p>Email: {student.email}</p>
        </div>
      ))}
    </div>
  );
};

export default StudentList;
