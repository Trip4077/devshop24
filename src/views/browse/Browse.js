import React from 'react';

const Browse = props => {
  return(
    <div>
      <button onClick={() => props.history.push('/browse/teams')}>Teams</button>
      <button onClick={() => props.history.push('/browse/projects')}>Projects</button>
    </div>
  )
}

export default Browse;