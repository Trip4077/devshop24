import React from 'react';
import RegisterDeveloper from './views/RegiserDeveloper';
import LoginDeveloper from './views/LoginDeveloper';

import { Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path='/dev/register' render={props => <RegisterDeveloper {...props} />} />
        <Route exact path='/dev/login' render={props => <LoginDeveloper {...props} />} />
      </header>
    </div>
  );
}

export default App;
