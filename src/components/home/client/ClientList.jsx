import React, { useEffect } from 'react';
import { getAllClients, setClients } from '../../../actions';
import { useSelector, useDispatch } from 'react-redux';

import Search from '../Search';

import ClientCard from './ClientCard';
import ClientPanel from './ClientPanel';

const ClientList = props => {
  const dispatch = useDispatch();
  const clients = useSelector(state => state.devReducer.clients);
  const allClients = useSelector(state => state.devReducer.allClients);

  useEffect(() => {
    dispatch(getAllClients())
  }, []);

  return(
    <>
      <h2>Registered Clients:</h2>
      <h3>Results: {clients.length}</h3>

      <Search arr={allClients} action={setClients} />
      <ClientPanel allClients={allClients} clients={clients} />

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center" }}>
        {
          clients.map(client => <ClientCard client={client} />)
        }
      </div>
    </>
  )
}

export default ClientList;