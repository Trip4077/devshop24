import React from 'react';
import { useSelector } from 'react-redux';
import { userTeamSwitch } from '../../helper/switch';

const UserTeams = props => {
  const devs = useSelector(state => state.clientReducer.allDevs);
  const clients = useSelector(state => state.devReducer.allClients);

  return (
    <div>
      {
        props.dev ? userTeamSwitch(props.teams, props.dev, false, devs, clients)
                  : userTeamSwitch(props.teams, false, props.client, devs, clients)
      }
    </div>
  )
}

export default UserTeams;