import React from 'react';
import { setClients } from '../../../actions';
import { useSelector } from 'react-redux';

import Search from '../Search';

import ClientCard from './ClientCard';
import ClientPanel from './ClientPanel';

const ClientList = () => {
  const clients = useSelector(state => state.devReducer.clients);
  const allClients = useSelector(state => state.devReducer.allClients);

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