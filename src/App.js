import './App.css';
import React, {useState, useEffect} from 'react'
import StudentList from './components/StudentList';
import StudentInfo from './components/StudentInfo';


const RUNNING_GUNICORN = false;

function allLoaded(dependencies) {
  for(const dependency of dependencies) {
    if(!dependency || Object.getOwnPropertyNames(dependency).length === 0)
      return false;
  }

  return true;
}

function App() {
  const [studentList, setStudentList] = useState(undefined);
  const [currentStudent, setCurrentStudent] = useState(undefined);

  useEffect(() => {
    let json_file;

    if(!RUNNING_GUNICORN)
      json_file = 'sample_dataset.json';
    else
      json_file = '/get_students';

    const request = async () => {
      const response = await fetch(json_file);
      const json = await response.json();
      setStudentList(json);
      setCurrentStudent(json['student_list'][0]);
    }
    console.log('test');
    request();
  }, []);

  console.log('re-render');
  if (allLoaded([studentList, currentStudent])) {
    return (
      <div>
        <StudentList studentList={studentList} handleClick={(e) => setCurrentStudent(e)}></StudentList>
        <StudentInfo student={currentStudent}></StudentInfo>
      </div>
    )
  } else {
    return "Loading student data...";
  }
}

export default App;
