import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllClients, getAllDevs, getAllTeams } from '../../actions';

const Browse = props => {
  const dispatch = useDispatch();

  useEffect(() => {
    if(localStorage.getItem('role') === 'dev') {
      dispatch(getAllDevs());
      dispatch(getAllTeams());
    } else {
      dispatch(getAllClients());
      dispatch(getAllTeams());
    }
  }, []);

  return(
    <div>
      <button onClick={() => props.history.push('/browse/teams')}>Teams</button>
      <button onClick={() => props.history.push('/browse/projects')}>Projects</button>
    </div>
  )
}

export default Browse;