import React from 'react';

const ClientInfo = props => {
  return(
    <div>
      <p>{props.client.first_name} {props.client.last_name}</p>
      <p>{props.client.company}</p>
      <p>{props.client.email}</p>
      <p>{props.client.phone}</p>
    </div>
  )
}

export default ClientInfo;