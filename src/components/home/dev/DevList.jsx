import React from 'react';
import { setDevs } from '../../../actions';
import { useSelector, useDispatch } from 'react-redux';

import Search from '../Search';

import DevPanel from './DevPanel';
import DevCard from './DevCard';

const ClientList = () => {
  const devs = useSelector(state => state.clientReducer.devs);
  const allDevs = useSelector(state => state.clientReducer.allDevs);

  return(
    <>
      <h2>Registered Developers:</h2>
      <h3>Results: {devs.length}</h3>

      <Search arr={allDevs} action={setDevs} />
      <DevPanel devs={devs} allDevs={allDevs} />

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center" }}>
        {
          devs.map(dev => <DevCard dev={dev} stack={dev.tech_stack.split(' ')} />)
        }
      </div>
    </>
  )
}

export default ClientList;