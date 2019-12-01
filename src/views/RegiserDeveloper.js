import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerDev } from '../actions';


const RegisterDeveloper = () => {
  const blankForm = {
    "email": "",
    "first_name": "",
    "last_name": "",
    "password": "",
    "phone": "",
    "title": "Full Stack",
    "location": "United States",
    "tech_stack": "",
    "interest": "",
    "rate": 20.0,
    "available": true
  }

  const [ formVals, setFormVals ] = useState(blankForm);
  const developer = useSelector(state => state.devReducer);
  const dispatch = useDispatch();

  const handleChange = e => {
    setFormVals({
      ...formVals,
      [e.target.name]: e.target.value 
    })
  }

  const handleChangeCheckbox = e => {
    if(e.target.checked) {

      if(formVals.tech_stack.length) {

        setFormVals({
          ...formVals,
          tech_stack: `${formVals.tech_stack} ${e.target.value}`
        });

      } else {

        setFormVals({
          ...formVals,
          tech_stack: e.target.value
        })

      }

    } else {
      const newStack = formVals.tech_stack.replace(`${e.target.value}`, '').trim();

      setFormVals({
        ...formVals,
        tech_stack: newStack
      })

    }
  }

  const handleSubmit = (e, submission, reduxFn) => {
    e.preventDefault();
    dispatch(reduxFn(submission));
  }

  if(developer.err) console.log(developer.err.response.data.detail);

  return(
    <div>
      Register As A Developer
      <form onSubmit={e => handleSubmit(e, formVals, registerDev)}>
        {
          developer.err ? <p>{developer.err.response.data.detail}</p> : null
        }
        <label>First Name:</label>
        <input  name='first_name'
                value={ formVals.first_name }
                onChange={handleChange}
                type='text'
        />

        <label>Last Name:</label>
        <input  name='last_name'
                value={ formVals.last_name }
                onChange={handleChange}
                type='text'
        />

        <label>Email:</label>
        <input  name='email'
                value={ formVals.email }
                onChange={handleChange}
                type='text'
        />

        <label>Password:</label>
        <input  name='password'
                value={ formVals.password }
                onChange={handleChange}
                type='text'
        />

        <label>Phone:</label>
        <input  name='phone'
                value={ formVals.phone }
                onChange={handleChange}
                type='text'
        />

        <label>Location:</label>
        <select onChange={handleChange} name="location">
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
          <option value="United Kingdom">United Kingdom</option>
        </select>

        <label>Main Role:</label>
        <select onChange={handleChange} name="title">
          <option value="Full Stack">Full Stack</option>
          <option value="Front End">Front End</option>
          <option value="Back End">Back End</option>
          <option value="Android">Android</option>
          <option value="iOS">iOS</option>
          <option value="Desktop">Desktop</option>
          <option value="QA">QA</option>
          <option value="DevOps">DevOps</option>
        </select>

        <fieldset onChange={handleChangeCheckbox}>      
          <legend>What is Your Tech Stack?</legend>      
          <input type="checkbox" name="tech_stack" value="HTML" />HTML      
          <input type="checkbox" name="stack_stack" value="CSS" />CSS     
          <input type="checkbox" name="stack_stack" value="JAVASCRIPT" />JAVASCRIPT    
        </fieldset>      

        <button onClick={e => handleSubmit(e, formVals, registerDev)}>Register</button>
      </form>
    </div>
  )
}

export default RegisterDeveloper;