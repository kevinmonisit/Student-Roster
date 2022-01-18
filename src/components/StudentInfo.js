import React, {useState, useEffect} from 'react';

const handleDelete = (event, _id) => {
  console.log(_id);
 if(typeof _id === Object) {
   const response = fetch(`/delete/${_id}`);
   window.location.reload();
 }
}

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
  } else {

    const {first_name, last_name, grad_year, major, _id} = props.student;

      return (
        <div>
          <strong>First Name:</strong> {first_name} <br></br>
          <strong>Last Name:</strong> {last_name} <br></br>
          <strong>Major:</strong> {major} <br></br>
          <strong>Graduation Year:</strong> {grad_year}
          <br/>
          <button className='bg-blue-500 hover:bg-blue-400 text-white font-bold px-4 rounded w-auto' value='Delete' onClick={(e) => handleDelete(e, _id)}>Delete Student</button>
        </div>
      )
    }

}

export default StudentInfo;