import React, {useState, useEffect} from 'react'
import StudentButton from './StudentButton'

function StudentList(props) {
  const {studentList} = props;
  const styling = 'bg-blue-500 hover:bg-blue-400 text-white font-bold px-4 rounded w-auto';

  //create array of buttons
  //each with the names of each student
  //in the database
  const studentButtonList =
    studentList['student_list'].map(student => {
      return <StudentButton
              className={styling}
              student={student}
              key={student._id}
              handleClick={props.handleClick}>
            </StudentButton>
    });

    const addButton = <StudentButton
                                  className={styling}
                                  student={"addition"}
                                  key={-1}
                                  handleClick={props.handleClick}>
                      </StudentButton>

    return studentButtonList.concat(addButton);
}

export default StudentList;