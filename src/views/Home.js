import React from 'react';
import ClientList from '../components/home/client/ClientList';
import DevList from '../components/home/dev/DevList';

const Home = () => {
  const role = localStorage.getItem('role');

  if(role === 'dev') {

    return(
      <div>
        <ClientList />
      </div>
    )

  } else if(role === 'client') {

    return(
      <div>
        <DevList />
      </div>
    )

  } else {

    return(
      <div>
        Please Log In
      </div>
    )

  }
}

export default Home;