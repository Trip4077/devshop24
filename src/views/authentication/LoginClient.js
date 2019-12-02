import React, { useState, useEffect } from 'react';
import { loginClient } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';
import { blankLoginForm, handleChange, handleSubmit } from '../../components/forms/formHandlers';

const LoginClient = props => {
  const [ loginVals, setLoginVals ] = useState(blankLoginForm);
  const err = useSelector(state => state.clientReducer.err);
  const client = useSelector(state => state.clientReducer.client);
  const dispatch = useDispatch();

  useEffect(() => {
    if(localStorage.getItem('token')) {
      props.history.push('/home');
    }
  });

  return(
    <div>
      Login As A Client

      <form onSubmit={e => handleSubmit(e, loginVals, loginClient, dispatch)}>
        
        {
          err ? <p>{err.response.data.err}</p> : null
        }

        <label>Email:</label>
        <input  name='email'
                value={ loginVals.email }
                onChange={e => handleChange(e, loginVals, setLoginVals)}
                type='text'
                required
        />

        <label>Password:</label>
        <input  name='password'
                value={ loginVals.password }
                onChange={e => handleChange(e, loginVals, setLoginVals)}
                type='text'
                required
        />

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginClient;
