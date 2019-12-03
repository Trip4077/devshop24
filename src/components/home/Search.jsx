import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { filterBySearch } from '../../helper/filter';

const Search = props => {
  const [ search, setSearch ] = useState("");
  const dispatch = useDispatch();

  return(
    <form onSubmit={e => { 
        e.preventDefault();
        dispatch( props.action( filterBySearch( props.arr, search )))}
      }>

      <input type="text"
             name='search'
             placeholder="Search..."
             value={search}
             onChange={e => setSearch(e.target.value)}
             />

      <button type="submit">Search</button>
    </form>
  )
}

export default Search;