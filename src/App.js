import './App.css';
import React, {useState, useEffect} from 'react'
import StudentButton from './components/studentButton';

function App() {
  const [studentList, setStudentList] = useState({});

  // useEffect(() => {
  //   fetch('/student_names').then(res => res.json()).then(data => {
  //     setCurrentTime(data.time);
  //   });
  // }, []);

  useEffect(() => {
    fetch('/get_students').then(res => res.json()).then(data => {
      setStudentList(data);
      console.log(studentList);
    })
  }, [])

  if (studentList && Object.getOwnPropertyNames(studentList).length > 0) {
    return studentList['student_list'].map(student => {
      return <StudentButton name={student.first_name}></StudentButton>
    })
  } else {
    return "Loading student data...";
  }
}

export default App;
