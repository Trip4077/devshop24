import React, { useEffect, useCallback } from 'react';
import { getAllClients } from '../actions';
import { useSelector, useDispatch } from 'react-redux';

const Home = () => {
  const role = localStorage.getItem('role');
  const dispatch = useDispatch();

  const clients = useSelector(state => state.devReducer.clients);

  useEffect(() => {
    dispatch(getAllClients())
  }, []);

  if(role === 'dev') {

    console.log(clients)

    return(
      <div>
        <h2>Registered Clients:</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center" }}>
          {
            clients.map(client => {
              return (
                <div style={{margin: "0 25px"}}>
                  <h2>{client.first_name} {client.last_name}</h2>
                  <h3>{client.company}</h3>

                  <address>
                    <p>{client.email}</p>
                    <p>{client.phone}</p>
                  </address>
                </div>
              )
            })
          }
        </div>

        <h2>Current Projects:</h2>
        <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center" }}>

        </div>
      </div>
    )

  } else if(role === 'client') {

    return(
      <div>
        User is Client
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