import React, { useState } from 'react';
import { updateDev } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import { handleChange, handleChangeCheckbox } from '../../components/forms/formHandlers';

const UpdateDev = props => {
  const [ updateVals, setUpdateVals ] = useState({});
  const err = useSelector(state => state.devReducer.err);
  const dev = useSelector(state => state.devReducer.developer);
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateDev(dev.id, { ...dev, ...updateVals }));
  }

  return(
    <div>
      <h2>Profile Info:</h2>

      <form onSubmit={e => handleSubmit(e)}> 

        {
          err ? <p>{err.response.data.detail}</p> : null
        }

        <label>First Name:</label>
        <input  name='first_name'
                value={ updateVals.first_name }
                onChange={e => handleChange(e, updateVals, setUpdateVals)}
                type='text'
        />

        <label>Last Name:</label>
        <input  name='last_name'
                value={ updateVals.last_name }
                onChange={e => handleChange(e, updateVals, setUpdateVals)}
                type='text'
        />

        <label>Phone:</label>
        <input  name='phone'
                value={ updateVals.phone }
                onChange={e => handleChange(e, updateVals, setUpdateVals)}
                type='text'
        />

        <label>Location:</label>
        <select onChange={e => handleChange(e, updateVals, setUpdateVals)} name="location">
          <option value="United States">United States</option>
          <option value="Canada">Canada</option>
          <option value="Mexico">Mexico</option>
          <option value="United Kingdom">United Kingdom</option>
        </select>

        <label>Main Role:</label>
        <select onChange={e => handleChange(e, updateVals, setUpdateVals)} name="title">
          <option value="Full Stack">Full Stack</option>
          <option value="Front End">Front End</option>
          <option value="Back End">Back End</option>
          <option value="Android">Android</option>
          <option value="iOS">iOS</option>
          <option value="Desktop">Desktop</option>
          <option value="QA">QA</option>
          <option value="DevOps">DevOps</option>
        </select>

        <fieldset onChange={e => handleChangeCheckbox(e, updateVals, setUpdateVals)}>      
          <legend>What is Your Tech Stack?</legend>      
          <input type="checkbox" name="tech_stack" value="HTML" />HTML      
          <input type="checkbox" name="stack_stack" value="CSS" />CSS     
          <input type="checkbox" name="stack_stack" value="JAVASCRIPT" />JAVASCRIPT    
        </fieldset>      

        <button type='submit'>SAVE CHANGES</button>
      </form>
    </div>
  )
}

export default UpdateDev;