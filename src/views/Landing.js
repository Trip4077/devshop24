import React from 'react';
import { Link } from 'react-router-dom';

const Landing = () => {
  return(
    <div>
      <h1>DevShop24</h1>

      <Link to='/dev/register'>
        <button>Register As Developer</button>
      </Link>
      <Link to='/dev/login'>
        <button>Login As Developer</button>
      </Link>

      <Link to='/client/register'>
        <button>Register As Client</button>
      </Link>
      <Link to='/client/login'>
        <button>Login As Client</button>
      </Link>
    </div>
  )
}

export default Landing;