import React from 'react';
import TeamCard from '../components/browse/TeamCard';

import { teamListConfig } from './teams';

export const userTeamSwitch = (teams=[], dev=false, client=false, devs, clients) => {
  if(dev && dev.id) {
      return(
        <>
          <h2>{dev.first_name}'s Work:</h2>
          {
            teams.map(team => {
              switch(dev.id) {
                case team.b_id:
                  return <div><p>{team.project_title}</p><p>Backend Engineer</p></div>
    
                case team.d_id:
                    return <div><p>{team.project_title}</p><p>DevOps Engineer</p></div>
    
                case team.f_id:
                    return <div><p>{team.project_title}</p><p>Frontend Engineer</p></div>
    
                case team.u_id:
                    return <div><p>{team.project_title}</p><p>UI/UX</p></div>
    
                default:
                  return null
              }
            })
          }
        </>
      )
    } else if (client) {
  
      const clientTeams = teams.filter(team => team.c_id === client.id);

      const clientList = teamListConfig(clientTeams, devs, [ client ]);

      return (
        <>
          <h2>{client.first_name}'s Results:</h2>
          {
            teams.length ? clientList.map(team => <TeamCard team={team} />)
                         : null
          }
        </>
      )
    } else {
      return <p>No ID Found</p>
    }
}