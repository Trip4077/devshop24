import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import ClientInfo from '../../components/profile/clientInfo';
import UserTeams from '../../components/profile/userTeams';

const ClientProfile = props => {
  const client = useSelector(state => state.devReducer.clients)
                .filter(client => Number( props.match.params.id ) === client.id)[0];

  const user = useSelector(state => state.clientReducer.client);
  const teams = useSelector(state => state.teamReducer.teams);

  return(
    <div>
      {
        client.id === user.id ? <div>
                                  <Link to={`/client/profile/${client.id}/settings`}> Update Info </Link> 
                                  <Link to={`/project-builder`}> Start A Project </Link> 
                                </div>
                           : null
      }
      <ClientInfo client={client} />
      <UserTeams teams={teams} client={client} />
    </div>
  )
}

export default ClientProfile;