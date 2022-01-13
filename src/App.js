import './App.css';
import React, {useState, useEffect} from 'react'
import StudentButton from './components/studentButton';

function App() {
  const [currentTime, setCurrentTime] = useState(0);

  useEffect(() => {
    fetch('/student_names').then(res => res.json()).then(data => {
      setCurrentTime(data.time);
    });
  }, []);

  return (
    <div className="App">
      <StudentButton name='test1'></StudentButton>
      <StudentButton name='test2'></StudentButton>
      <StudentButton name='test3'></StudentButton>
      <StudentButton name='test4'></StudentButton>
    </div>
  );
}

export default App;
