import React, {useState, useEffect} from 'react';

function StudentInfo(props) {
  const {first_name, last_name, grad_year, major} = props.student;

    return (
      <div>
        First Name: {first_name} <br></br>
        Last Name: {last_name} <br></br>
        Major: {major} <br></br>
        Graduation Year: {grad_year}
      </div>
    )
}

export default StudentInfo;