import React, {useState, useEffect} from 'react'

function StudentButton(props) {
  return (
    <button>
      {props.name}
    </button>
  )
}

export default StudentButton;