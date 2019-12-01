import React, { useState, useEffect } from 'react';
import { loginDev } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import { blankLoginForm, handleChange, handleSubmit } from '../components/forms/formHandlers';

const LoginDeveloper = props => {
  const [ loginVals, setLoginVals ] = useState(blankLoginForm);
  const err = useSelector(state => state.devReducer.err);
  const dev = useSelector(state => state.devReducer.developer);
  const dispatch = useDispatch();

  useEffect(() => {
    if(localStorage.getItem('token')) {
      props.history.push('/home');
    }
  });

  return(
    <div>
      Login As A Developer

      <form onSubmit={e => handleSubmit(e, loginVals, loginDev, dispatch, props.history)}>
        
        {
          err ? <p>{err.response.data.err}</p> : null
        }

        <input  name='email'
                value={ loginVals.email }
                onChange={e => handleChange(e, loginVals, setLoginVals)}
                type='text'
        />

        <input  name='password'
                value={ loginVals.password }
                onChange={e => handleChange(e, loginVals, setLoginVals)}
                type='text'
        />

        <button type='submit'>Login</button>
      </form>
    </div>
  )
}

export default LoginDeveloper;
