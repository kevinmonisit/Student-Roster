import React, {useState, useEffect} from 'react';

function StudentInfo(props) {
  const [studentData, setStudentData] = useState(props.student);

    return (
      <div>
        First Name: {studentData.first_name} {"\n"}
        Last Name: {studentData.last_name}
      </div>
    )
}

export default StudentInfo;