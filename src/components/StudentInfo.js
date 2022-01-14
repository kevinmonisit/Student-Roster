import React, {useState, useEffect} from 'react';

function StudentInfo(props) {

  const [values, setValues] = useState({
    first_name: '',
    last_name: '',
    grad_year: '',
    major: '',
  });

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setValues(inputs => ({...inputs, [name]: value}))
  }

  const handleSubmit = (event) => {
    const {first_name, last_name, grad_year, major} = values;
    const params = new URLSearchParams({
      first_name,
      last_name,
      grad_year,
      major
    }).toString();

    const response = fetch(`/add_student?${params}`, {
      method: 'POST'
    })

    console.log(params);
  }


  if(props.student === "addition") {
    return (
      <div>
        <form onSubmit={handleSubmit}>
          First Name:
          <input
            id='first-name'
            type='text'
            placeholder='First Name'
            name='first_name'
            value={values.first_name}
            onChange={handleChange}>
          </input>

          <br/>

          Last Name:
          <input
            id='first-name'
            type='text'
            placeholder='Last Name'
            name='last_name'
            value={values.last_name}
            onChange={handleChange}>
          </input>

          <br/>

          Major:
          <input
            id='major'
            type='text'
            placeholder='Major'
            name='major'
            value={values.major}
            onChange={handleChange}>
          </input>

          <br/>

          Graduation Year:
          <input
            id='grad-year'
            type='text'
            placeholder='Graduation Year'
            name='grad_year'
            value={values.grad_year}
            onChange={handleChange}>
          </input>

          <br/>

          <input type='submit' value='Submit'/>
        </form>
      </div>
    )
  }

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