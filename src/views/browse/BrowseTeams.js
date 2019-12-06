import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
// import { updateClient, deleteClient } from '../../actions';

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
      switch(dev.id) {
        case detailed.b_id:
          delete detailed.b_id;
          detailed.backend = dev;
          break;

        case detailed.f_id:
          delete detailed.f_id;
          detailed.frontend = dev;
          break;

        case detailed.u_id:
          delete detailed.u_id;
          detailed.ui = dev;
          break;

        case detailed.d_id:
          delete detailed.d_id;
          detailed.devops = dev;
          break;
      }
    });

    return detailed;
  });
  
  return(
    <div>
      <h1>Past Teams:</h1>
      {
        teamList.map(team => {
          return(
            <div>
              <h3>{team.project_title}</h3>

              <h4>Team:</h4>
              <p>{`Client: ${team.client.first_name} ${team.client.last_name}`}</p>
              <p>{`UI/UX Designer: ${team.ui.first_name} ${team.ui.last_name}`}</p>
              <p>{`\tRate: \$${team.ui.rate}.00 / hr`}</p>
              <p>{`Front End Engineer: ${team.frontend.first_name} ${team.frontend.last_name}`}</p>
              <p>{`\tRate: \$${team.frontend.rate}.00 / hr`}</p>
              <p>{`Back End Engineer: ${team.backend.first_name} ${team.backend.last_name}`}</p>
              <p>{`\tRate: \$${team.backend.rate}.00 / hr`}</p>
              <p>{`DevOps Engineer: ${team.devops.first_name} ${team.devops.last_name}`}</p>
              <p>{`\tRate: \$${team.devops.rate}.00 / hr`}</p>
            </div>
          )
        })
      }
    </div>
  )
}

export default BrowseTeams;