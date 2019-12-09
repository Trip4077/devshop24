import React from 'react';
import TeamCard from '../../components/browse/TeamCard';

import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const BrowseTeams = props => {
  const devs = useSelector(state => state.clientReducer.allDevs);
  const clients = useSelector(state => state.devReducer.allClients);
  const teams = useSelector(state => state.teamReducer.allTeams);
  
  const teamList = teams.map(team => {
    const detailed = { ...team }

    clients.map(client => {
      if( detailed.c_id === client.id ) {
        delete detailed.c_id;
        delete detailed.client_first;
        delete detailed.client_last;
        detailed.client = client;
      }
    });

    devs.map(dev => {

      if(dev.id === detailed.b_id) {
        delete detailed.b_id;
        detailed.backend = dev;
      }

      if(dev.id === detailed.f_id) {
        delete detailed.f_id;
        detailed.frontend = dev;
      }

      if(dev.id === detailed.u_id) {
        delete detailed.u_id;
        detailed.ui = dev;
      }

      if(dev.id === detailed.d_id) {
        delete detailed.d_id;
        detailed.devops = dev;
      }

    });

    return detailed;
  });
  
  return(
    <div>

      {
        localStorage.getItem('role') === 'dev' ? null 
                                               : <Link to='/team-builder'>
                                                    Build A Team
                                                  </Link>
      }

      <h1>Past Teams:</h1>
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