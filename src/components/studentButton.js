import React from 'react'

function StudentButton(props) {

  //this indicates that the button
  //is meant to be the button that changes
  //the form to add students
  if(props.student === "addition") {
    return (
      <button className={props.className} onClick={() => {props.handleClick(props.student)}}>
        +
      </button>
    )
  } else {
    return (
      <button className={props.className} onClick={() => {props.handleClick(props.student)}}>
        {props.student.first_name}
      </button>
    )
  }

}

export default StudentButton;