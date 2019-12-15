import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Nav = () => {
  const logout = () => {
    localStorage.clear()
    window.location.replace('/')
  }

  const dev = useSelector(state => state.devReducer.developer);
  const client = useSelector(state => state.clientReducer.client);

  const role = localStorage.getItem('role');
  let id;

  if(role === 'dev') {
    id = dev.id;
  } else {
    id = client.id
  }

  return(
    <nav>
      <Link to='/home'>Home</Link>
      <Link to='/browse'>Browse</Link>
      <Link to={`/${role}/profile/${id}`}>profile</Link>

      <button onClick={logout}>Log Out</button>
    </nav>
  )
}

export default Nav;