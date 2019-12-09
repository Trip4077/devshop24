import React from 'react';
import { Link } from 'react-router-dom';

const TeamCard = props => {
  return(
    <div>
      <h3>{props.team.project_title}</h3>

      <h4>Team:</h4>
      <Link to={`/client/profile/${props.team.client.id}`}>
        <p>{`Client: ${props.team.client.first_name} ${props.team.client.last_name}`}</p>
      </Link>

      <Link to={`/dev/profile/${props.team.ui.id}`}>
        <p>{`UI/UX Designer: ${props.team.ui.first_name} ${props.team.ui.last_name}`}</p>
      </Link>
      <p>{`\tRate: \$${props.team.ui.rate}.00 / hr`}</p>

      <Link to={`/dev/profile/${props.team.frontend.id}`}>
        <p>{`Front End Engineer: ${props.team.frontend.first_name} ${props.team.frontend.last_name}`}</p>
      </Link>
      <p>{`\tRate: \$${props.team.frontend.rate}.00 / hr`}</p>


      <Link to={`/dev/profile/${props.team.backend.id}`}>
        <p>{`Back End Engineer: ${props.team.backend.first_name} ${props.team.backend.last_name}`}</p>
      </Link>
      <p>{`\tRate: \$${props.team.backend.rate}.00 / hr`}</p>

      <Link to={`/dev/profile/${props.team.devops.id}`}>
        <p>{`DevOps Engineer: ${props.team.devops.first_name} ${props.team.devops.last_name}`}</p>
      </Link>
      <p>{`\tRate: \$${props.team.devops.rate}.00 / hr`}</p>
    </div>
  )
}

export default TeamCard;