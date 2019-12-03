import React from 'react';

const DevInfo = props => {
  return(
    <div>
      <p>{props.dev.first_name} {props.dev.last_name}</p>
      <p>{props.dev.title}</p>
      <p>{props.dev.email}</p>
      <p>{props.dev.phone}</p>
      <p>{props.dev.location}</p>
      <p>{`${props.dev.rate}.00`}</p>

      {
        props.stack.map(skill => <p>{skill}</p>)
      }
    </div>
  )
}

export default DevInfo;