import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

import ProjectCard from '../../components/browse/ProjectCard';

const BrowseProjects = () => {
  const projects = useSelector(state => state.projectReducer.allProjects)

  return(
    <div>
      <h1>All Projects:</h1>

      {
        projects.map(project => {
          return(
            <Link to={`/browse/projects/${project.id}`}>
              <ProjectCard project={project} />
            </Link>
          )
        })
      }
    </div>
  )
}

export default BrowseProjects;