import React, {useState, useEffect} from 'react'
import StudentButton from './StudentButton'

function StudentList(props) {
  const {studentList} = props;

  return studentList['student_list'].map(student => {
    return <StudentButton name={student.first_name} key={student._id}></StudentButton>
  })
}

export default StudentList;