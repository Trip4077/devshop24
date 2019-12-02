import React, { useEffect } from 'react';
import { getAllClients } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';

const ClientList = props => {
  const dispatch = useDispatch();
  const clients = useSelector(state => state.devReducer.clients);

  useEffect(() => {
    dispatch(getAllClients())
  }, []);

  return(
    <>
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
    </>
  )
}

export default ClientList;