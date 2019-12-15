import React, { useEffect } from 'react';
import ClientList from '../components/home/client/ClientList';
import DevList from '../components/home/dev/DevList';

import { useDispatch } from 'react-redux';
import { getAllDevs, getAllTeams, getAllProjects } from '../actions';

const Home = () => {
  const role = localStorage.getItem('role');
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllProjects())
    dispatch(getAllDevs());
    dispatch(getAllTeams());
  }, []);

  if(role === 'dev') {

    return <ClientList />

  } else if(role === 'client') {

    return <DevList />

  } else {

    return(
      <div>
        Please Log In
      </div>
    )

  }
}

export default Home;