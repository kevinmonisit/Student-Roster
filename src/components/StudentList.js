import React, {useState, useEffect} from 'react'
import StudentButton from './StudentButton'

function StudentList(props) {
  const {NOT_RUNNING_GUNICORN, studentList} = props;

  if(NOT_RUNNING_GUNICORN) {

    // this is just example code
    // when debugging and unable to
    // query the mongoDB server
    return (
      <div>
        <StudentButton name={'kevin'}></StudentButton>
        <StudentButton name={'man'}></StudentButton>
        <StudentButton name={'child'}></StudentButton>
        <StudentButton name={'bro'}></StudentButton>
      </div>
    )
  }

  return studentList['student_list'].map(student => {
    return <StudentButton name={student.first_name}></StudentButton>
  })
}

export default StudentList;