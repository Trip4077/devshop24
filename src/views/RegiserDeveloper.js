import React, { useState, useEffect } from 'react';
import { registerDev } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import { blankDeveloperForm, handleChange, handleChangeCheckbox, handleSubmit } from '../components/forms/formHandlers';

const RegisterDeveloper = props => {
  const [ formVals, setFormVals ] = useState(blankDeveloperForm);
  const err = useSelector(state => state.devReducer.err);
  const dev = useSelector(state => state.devReducer.developer);
  const dispatch = useDispatch();

  useEffect(() => {
    if(!err && dev.id) {
      props.history.push('/dev/login');
    }
  });
  
  return(
    <div>
      Register As A Developer

      <form onSubmit={e => handleSubmit(e, formVals, registerDev, dispatch, props.history, err)}>

        {
          err ? <p>{err.response.data.detail}</p> : null
        }

        <label>First Name:</label>
        <input  name='first_name'
                value={ formVals.first_name }
                onChange={e => handleChange(e, formVals, setFormVals)}
                type='text'
                required
        />

        <label>Last Name:</label>
        <input  name='last_name'
                value={ formVals.last_name }
                onChange={e => handleChange(e, formVals, setFormVals)}
                type='text'
                required
        />

        <label>Email:</label>
        <input  name='email'
                value={ formVals.email }
                onChange={e => handleChange(e, formVals, setFormVals)}
                type='email'
                required
        />

        <label>Password:</label>
        <input  name='password'
                value={ formVals.password }
                onChange={e => handleChange(e, formVals, setFormVals)}
                type='text'
                required
                minlength="6"
        />

        <label>Phone:</label>
        <input  name='phone'
                value={ formVals.phone }
                onChange={e => handleChange(e, formVals, setFormVals)}
                type='text'
                required
        />

        <label>Location:</label>
        <select onChange={e => handleChange(e, formVals, setFormVals)} name="location">
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
          <option value="United Kingdom">United Kingdom</option>
        </select>

        <label>Main Role:</label>
        <select onChange={e => handleChange(e, formVals, setFormVals)} name="title">
          <option value="Full Stack">Full Stack</option>
          <option value="Front End">Front End</option>
          <option value="Back End">Back End</option>
          <option value="Android">Android</option>
          <option value="iOS">iOS</option>
          <option value="Desktop">Desktop</option>
          <option value="QA">QA</option>
          <option value="DevOps">DevOps</option>
        </select>

        <fieldset onChange={e => handleChangeCheckbox(e, formVals, setFormVals)}>      
          <legend>What is Your Tech Stack?</legend>      
          <input type="checkbox" name="tech_stack" value="HTML" />HTML      
          <input type="checkbox" name="stack_stack" value="CSS" />CSS     
          <input type="checkbox" name="stack_stack" value="JAVASCRIPT" />JAVASCRIPT    
        </fieldset>      

        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default RegisterDeveloper;