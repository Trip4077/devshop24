import React, { useState } from 'react';
import { addProject } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import { blankProjectForm, handleChange, handleSubmit } from '../../helper/formHandlers';

const ProjectBuilder = props =>{
  const [ formVals, setFormVals ] = useState(blankProjectForm);
  const dispatch = useDispatch();

  const submitAndDirect = e => {
    e.preventDefault();
    console.log(formVals)
    dispatch(addProject(formVals, props))
  }

  return(
    <div>
      <h1>Project Details: </h1>
      <form onSubmit={e => submitAndDirect(e)}>
      
        <label>Title:</label>
        <input  name='title'
                value={ formVals.title }
                onChange={e => handleChange(e, formVals, setFormVals)}
                type='text'
                required
        />

        <label>Budget:</label>
        <input  name='budget'
                value={ formVals.budget }
                onChange={e => handleChange(e, formVals, setFormVals)}
                placeholder="$5,000"
                type='text'
                required
        />

        <label>Deadline:</label>
        <input  name='deadline'
                value={ formVals.deadline }
                onChange={e => handleChange(e, formVals, setFormVals)}
                type='text'
                placeholder="12/12/12"
                required
        />

        <label>Description:</label>
        <input  name='description'
                value={ formVals.description }
                onChange={e => handleChange(e, formVals, setFormVals)}
                type='text'
                required
        />

        <label>Type:</label>
        <select onChange={e => handleChange(e, formVals, setFormVals)} name="type" required>
          <option>---Select Type---</option>
          <option value="Web">Web</option>
          <option value="Andriod">Andriod</option>
          <option value="iOS">iOS</option>
          <option value="Desktop">Desktop</option>
          <option value="AI/ML">AI/ML</option>
        </select>

        <button type='submit'>Add Team</button>
      </form>
    </div>
  )
}

export default ProjectBuilder;