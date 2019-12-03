import React, { useEffect } from 'react';
import { getAllDevs, setDevs } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';

import Search from './Search';

import DevPanel from './DevPanel';
import DevCard from './DevCard';

const ClientList = props => {
  const dispatch = useDispatch();
  const devs = useSelector(state => state.clientReducer.devs);
  const allDevs = useSelector(state => state.clientReducer.allDevs);

  useEffect(() => {
    dispatch(getAllDevs())
  }, []);

  return(
    <>
      <h2>Registered Developers:</h2>
      <h3>Results: {devs.length}</h3>
      <Search arr={allDevs} action={setDevs} />
      <DevPanel devs={devs} allDevs={allDevs} />

      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center" }}>
        {
          devs.map(dev => {
            const stack = dev.tech_stack.split(' ')

            return (
              <DevCard dev={dev} stack={stack} />
            )
          })
        }
      </div>
    </>
  )
}

export default ClientList;