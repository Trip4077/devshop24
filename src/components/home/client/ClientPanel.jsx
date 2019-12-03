import React from 'react';
import { useDispatch } from 'react-redux';
import { setClients } from '../../../actions';
import { sortAlphabet, sortAlphabetReverse, sortCompany, sortCompanyReverse } from '../../../helper/sort';

const ClientPanel = props => {
  const dispatch = useDispatch();

  return(
    <div>
      <button onClick={() => dispatch( setClients( sortAlphabet( props.clients )))}>Sort Alphabetically</button>
      <button onClick={() => dispatch( setClients( sortAlphabetReverse( props.clients )))}>Sort Reverse Alphabetically</button>
      <button onClick={() => dispatch( setClients( sortCompany( props.clients )))}>Sort By Company</button>
      <button onClick={() => dispatch( setClients( sortCompanyReverse( props.clients )))}>Sort By Company Reverse</button>
      <button onClick={() => dispatch( setClients( props.allClients ))}>Clear Filter</button>
    </div>
  )
}

export default ClientPanel;