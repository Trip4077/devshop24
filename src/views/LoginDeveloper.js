import React, { useState } from 'react';
import { loginDev } from '../actions';
import { useSelector, useDispatch } from 'react-redux';
import { blankLoginForm, handleChange, handleSubmit } from '../components/forms/formHandlers';

const LoginDeveloper = () => {
  const [ loginVals, setLoginVals ] = useState(blankLoginForm);
  const err = useSelector(state => state.devReducer.err);
  const dispatch = useDispatch();

  if (err) {
    console.log(err.response.data.err)
  }

  return(
    <div>
      Login As A Developer

      <form onSubmit={e => handleSubmit(e, loginVals, loginDev, dispatch)}>
        
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
