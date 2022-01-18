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

function resetAndRefill() {
  fetch('/fillWithSampleDB');
  window.location.reload();
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

    request();
  }, []);

  if (allLoaded([studentList, currentStudent])) {
    return (
      <div className='flex flex-col w-screen'>
        {/* Control section of the page */}
        <div className='flex flex-row'>
          <div className='flex items-center justify-evenly w-1/2 flex-wrap content-around'>
            <StudentList
              studentList={studentList} handleClick={(e) => setCurrentStudent(e)}></StudentList>
          </div>
          <div className='w-1/2 text-center'>
            <StudentInfo student={currentStudent}></StudentInfo>
          </div>
        </div>

        {/* Below the control section */}
        <div className='w-screen place-content-center grid place-content-center'>
          <br/>
          <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold px-4 rounded w-auto'
          onClick={(e) => resetAndRefill()}>Reset DB and Fill with Sample Set</button>
        </div>
      </div>
    )
  } else {
    return "Loading student data...";
  }
}

export default App;
