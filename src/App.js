import './App.css';
import React, {useState, useEffect} from 'react'
import StudentList from './components/StudentList';
import StudentInfo from './components/StudentInfo';

const RUNNING_GUNICORN = false;

function App() {
  const [studentList, setStudentList] = useState({});
  const [currentStudent, setCurrentStudent] = useState();

  useEffect(() => {
    if()
    fetch('/get_students').then(res => res.json()).then(data => {
      setStudentList(data);
      console.log(studentList);
    })
  }, [])

  if (studentList && Object.getOwnPropertyNames(studentList).length > 0) {
    return (
      <div>
        <StudentList NOT_RUNNING_GUNICORN={true} studentList={studentList}></StudentList>
        <StudentInfo student={studentList}></StudentInfo>
      </div>
    )
  } else {
    return "Loading student data...";
  }
}

export default App;
