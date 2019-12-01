import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerDev } from './actions';

import './App.css';

function App() {
  const developer = useSelector(state => state.devReducer);
  const dispatch = useDispatch();
  console.log(developer);
  const newDev = {
    "email": "redux3@gmail.com",
    "first_name": "Ev",
    "last_name": "Eloper",
    "password": "password123",
    "phone": "555-555-5555",
    "title": "Front End Developer",
    "location": "US",
    "tech_stack": "html,css,js,react,redux",
    "interest": "climbing,hiking,rafting",
    "rate": 25.0,
    "available": true
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <button onClick={() => dispatch(registerDev(newDev))}>Register</button>
      </header>
    </div>
  );
}

export default App;
