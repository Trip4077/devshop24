import React from 'react';
import { useSelector } from 'react-redux';
import { teamListConfig } from '../../helper/teams';
import ProjectCard from '../../components/browse/ProjectCard';
import TeamCard from '../../components/browse/TeamCard';

const Projectinfo = props => {
  const project = useSelector(state => state.projectReducer.allProjects).filter(project => {
    return Number( props.match.params.id ) === project.id 
  })[0];

  const team = useSelector(state => state.teamReducer.allTeams).filter(team => {
    return Number( props.match.params.id ) === team.p_id
  })[0]

  const clients = useSelector(state => state.devReducer.allClients)
  const devs = useSelector(state => state.clientReducer.allDevs)

  const teamList = teamListConfig([team], devs, clients);

  return(
    <div>
      {
        project && project.id ? <ProjectCard project={project} />
                              : <p>No Project Found</p>
      }

     {
        teamList && teamList.length ? <TeamCard team={teamList[0]} />
                                    : <p>No Project Found</p>
      }
    </div>
  )
}

export default Projectinfo;