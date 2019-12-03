import React from 'react';

const DevCard = props => {
  return(
    <div style={{margin: "0 25px"}}>
      <h2>{props.dev.first_name} {props.dev.last_name}</h2>
      <h3>{props.dev.title}</h3>

      <p>${props.dev.rate}.00/hr</p> 

      <div>
        {props.stack.map(skill => <p>{skill}</p>)}
      </div>

      <address>
        <p>{props.dev.email}</p>
        <p>{props.dev.phone}</p>
        <p>{`${props.dev.available}`}</p>
      </address>
    </div>
  )
}

export default DevCard;