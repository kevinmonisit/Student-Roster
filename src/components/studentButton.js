import React from 'react'

function StudentButton(props) {

  //this indicates that the button
  //is meant to be the button that changes
  //the form to add students
  if(props.student == null) {
    return (
      <button onClick={() => {props.handleClick(props.student)}}>
        +
      </button>
    )
  } else {
    return (
      <button onClick={() => {props.handleClick(props.student)}}>
        {props.student.first_name}
      </button>
    )
  }

}

export default StudentButton;