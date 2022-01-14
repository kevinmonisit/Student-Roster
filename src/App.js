import './App.css';
import React, {useState, useEffect} from 'react'
import StudentList from './components/StudentList';
import StudentInfo from './components/StudentInfo';


const RUNNING_GUNICORN = false;

function App() {
  const [studentList, setStudentList] = useState({});
  const [currentStudent, setCurrentStudent] = useState();

  useEffect(() => {
    let json_file;

    if(!RUNNING_GUNICORN)
      json_file = 'sample_dataset.json';
    else
      json_file = '/get_students';

    fetch(json_file).then(res => res.json()).then(data => {
      setStudentList(data);
    })
  }, [])

  if (studentList && Object.getOwnPropertyNames(studentList).length > 0) {
    return (
      <div>
        <StudentList studentList={studentList}></StudentList>
        <StudentInfo student={studentList}></StudentInfo>
      </div>
    )
  } else {
    return "Loading student data...";
  }
}

export default App;
