import React from 'react';

const UserTeams = props => {
  return (
    <div>
      {
        props.teams.map(team => {
          switch(props.dev.id) {
            case team.b_id:
              return <div><p>{team.project_title}</p><p>Backend Engineer</p></div>

            case team.c_id:
                return <div><p>{team.project_title}</p><p>Client</p></div>

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
    </div>
  )
}

export default UserTeams;