import React from 'react';

export const userTeamSwitch = (teams=[], dev=false, client=false) => {
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
      return (
        <>
          <h2>{client.first_name}'s Results:</h2>
          {
            teams.map(team => {
              switch(client.id) {
                case team.c_id:
                  return <div><p>{team.project_title}</p></div>
    
                default:
                  return null
              }
            })
          }
        </>
      )
    } else {
      return <p>No ID Found</p>
    }
}