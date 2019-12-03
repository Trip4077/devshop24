import React from 'react';
import ClientList from '../components/home/client/ClientList';
import DevList from '../components/home/dev/DevList';

const Home = () => {
  const role = localStorage.getItem('role');

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