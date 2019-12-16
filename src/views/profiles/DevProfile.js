import React from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

import DevInfo from '../../components/profile/devInfo';
import UserTeams from '../../components/profile/userTeams';

const DevProfile = props => {
  const dev = useSelector(state => state.clientReducer.allDevs)
              .filter(dev => Number( props.match.params.id ) === dev.id )[0];

  const user = useSelector(state => state.devReducer.developer);
  const teams = useSelector(state => state.teamReducer.teams);

  let stack = [];

  if(dev.tech_stack) stack = dev.tech_stack.split(' ');

  return(
    <div>
      {
        dev.id === user.id ? <Link to={`/dev/profile/${dev.id}/settings`}> Update Info </Link> 
                           : null
      }
      <DevInfo dev={dev} stack={stack} teams={teams} />
      <UserTeams teams={teams} dev={dev} />
    </div>
  )
}

export default  DevProfile;