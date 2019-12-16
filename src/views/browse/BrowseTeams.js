import React from 'react';
import TeamCard from '../../components/browse/TeamCard';

import { useSelector } from 'react-redux';
import { teamListConfig } from '../../helper/teams';

const BrowseTeams = props => {
  const devs = useSelector(state => state.clientReducer.allDevs);
  const clients = useSelector(state => state.devReducer.allClients);
  const teams = useSelector(state => state.teamReducer.allTeams);
  
  const teamList = teamListConfig(teams, devs, clients);
  
  return(
    <div>
      <h1>All Teams:</h1>

      {
        teamList.map(team => {
          return(
            <TeamCard team={team} />
          )
        })
      }

    </div>
  )
}

export default BrowseTeams;