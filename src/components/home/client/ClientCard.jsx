import React from 'react';

const ClientCard = props => {
  return(
    <div style={{margin: "0 25px"}}>
      <h2>{props.client.first_name} {props.client.last_name}</h2>
      <h3>{props.client.company}</h3>

      <address>
        <p>{props.client.email}</p>
        <p>{props.client.phone}</p>
      </address>
    </div>
  )
}

export default ClientCard;