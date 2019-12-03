import React from 'react';
import { userTeamSwitch } from '../../helper/switch';

const UserTeams = props => {
  console.log(props)
  return (
    <div>
      {
        props.dev ? userTeamSwitch(props.teams, props.dev)
                  : userTeamSwitch(props.teams, false, props.client)
      }
    </div>
  )
}

export default UserTeams;