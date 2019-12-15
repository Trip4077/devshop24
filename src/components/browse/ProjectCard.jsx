import React from 'react';

const ProjectCard = props => {
  return (
    <div>
      <h2>{props.project.title}</h2>
      <h3>{props.project.description}</h3>

      <p>{props.project.type}</p>
      <p>{props.project.deadline}</p>
      <p>{props.project.budget}</p>
    </div>
  )
}

export default ProjectCard;