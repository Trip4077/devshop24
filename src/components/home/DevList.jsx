import React, { useEffect } from 'react';
import { getAllDevs } from '../../actions';
import { useSelector, useDispatch } from 'react-redux';

const ClientList = props => {
  const dispatch = useDispatch();
  const devs = useSelector(state => state.clientReducer.devs);

  useEffect(() => {
    dispatch(getAllDevs())
  }, []);

  return(
    <>
      <h2>Registered Developers:</h2>
      <div style={{ display: "flex", flexWrap: "wrap", justifyContent: "space-around", alignItems: "center" }}>
        {
          devs.map(dev => {
            const stack = dev.tech_stack.split(' ')

            return (
              <div style={{margin: "0 25px"}}>
                <h2>{dev.first_name} {dev.last_name}</h2>
                <h3>{dev.title}</h3>

                <p>${dev.rate}.00/hr</p> 

                <div>
                  {stack.map(skill => <p>{skill}</p>)}
                </div>

                <address>
                  <p>{dev.email}</p>
                  <p>{dev.phone}</p>
                </address>
              </div>
            )
          })
        }
      </div>
    </>
  )
}

export default ClientList;