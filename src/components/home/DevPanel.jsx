import React from 'react';
import { setDevs } from '../../actions';
import { useDispatch } from 'react-redux';
import { filterByTitle, filterByAvailable } from '../../helper/filter';
import { sortAlphabet, sortAlphabetReverse, sortRateLow, sortRateHigh } from '../../helper/sort';

const DevPanel = props => {
  const dispatch = useDispatch();

  return(
    <div>
      <button onClick={() => dispatch( setDevs( sortAlphabet( props.devs )))}>Sort Alphabetically</button>
      <button onClick={() => dispatch( setDevs( sortAlphabetReverse( props.devs )))}>Sort Reverse Alphabetically</button>
      <button onClick={() => dispatch( setDevs( sortRateLow( props.devs )))}>Sort Rate Lowest</button>
      <button onClick={() => dispatch( setDevs( sortRateHigh( props.devs )))}>Sort Rate Highest</button>
      <button onClick={() => dispatch( setDevs( filterByTitle( props.allDevs, 'Front End' )))}>Filter By Front End</button>
      <button onClick={() => dispatch( setDevs( filterByTitle( props.allDevs, 'Back End' )))}>Filter By Back End</button>
      <button onClick={() => dispatch( setDevs( filterByTitle( props.allDevs, 'QA' )))}>Filter By QA</button>
      <button onClick={() => dispatch( setDevs( filterByTitle( props.allDevs, 'DevOps' )))}>Filter By DevOps</button>
      <button onClick={() => dispatch( setDevs( filterByTitle( props.allDevs, 'Full Stack' )))}>Filter By Full Stack</button>
      <button onClick={() => dispatch( setDevs( filterByAvailable( props.allDevs, 'Available' )))}>Filter By Availability</button>
      <button onClick={() => dispatch( setDevs( props.allDevs ))}>Clear Filter</button>
    </div>
  )
}

export default DevPanel;