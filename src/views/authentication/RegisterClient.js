import React, { useState, useEffect } from 'react';
import { registerClient } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import { blankClientForm, handleChange, handleSubmit } from '../../components/forms/formHandlers';

const RegisterClient = props => {
  const [ formVals, setFormVals ] = useState(blankClientForm);
  const err = useSelector(state => state.clientReducer.err);
  const client = useSelector(state => state.clientReducer.client);
  const dispatch = useDispatch();

  
  useEffect(() => {
    if(!err && client.id) {
      props.history.push('/client/login');
    }
  });

  return(
    <div>
      Register As A Client

      <form onSubmit={e => handleSubmit(e, formVals, registerClient, dispatch)}>
      
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

        <label>Company:</label>
        <input  name='company'
                value={ formVals.company }
                onChange={e => handleChange(e, formVals, setFormVals)}
                type='text'
        />

        <button type='submit'>Register</button>
      </form>
    </div>
  )
}

export default RegisterClient;