import React, { useState } from 'react';
import { updateClient, deleteClient } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import { handleChange } from '../../helper/formHandlers';

const ClientUpdate = props => {
  const [ updateVals, setUpdateVals ] = useState({});
  const err = useSelector(state => state.devReducer.err);
  const client = useSelector(state => state.clientReducer.client);
  const dispatch = useDispatch();

  
  const handleSubmit = e => {
    e.preventDefault();
    dispatch(updateClient(client.id, { ...client, ...updateVals }));
  }

  const logout = () => {
    dispatch(deleteClient(client.id));
    localStorage.clear();
    props.history.push('/');
  }

  return(
    <div>
     <h2>Profile Info</h2>

      <form onSubmit={e => handleSubmit(e)}>
        
        <label>Password:</label>
        <input  name='password'
                value={ updateVals.password }
                onChange={e => handleChange(e, updateVals, setUpdateVals)}
                type='text'
                minlength="6"
        />

        <label>Phone:</label>
        <input  name='phone'
                value={ updateVals.phone }
                onChange={e => handleChange(e, updateVals, setUpdateVals)}
                type='text'
        />

        <label>Company:</label>
        <input  name='company'
                value={ updateVals.company }
                onChange={e => handleChange(e, updateVals, setUpdateVals)}
                type='text'
        />

        <button type='submit'>
          Save Changes
        </button>
      </form>

      <button onClick={logout}>Delete Account</button>
    </div>
  )
}

export default ClientUpdate;