import React, { useEffect } from 'react';
import { getClient, getAllTeams } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';

import ClientInfo from '../../components/profile/clientInfo';
import UserTeams from '../../components/profile/userTeams';

const ClientProfile = props => {
  const client = useSelector(state => state.devReducer.client);
  const teams = useSelector(state => state.teamReducer.teams);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getClient(props.match.params.id));
    dispatch(getAllTeams());
  }, []);

  return(
    <div>
      <ClientInfo client={client} />
      <UserTeams teams={teams} client={client} />
    </div>
  )
}

export default ClientProfile;