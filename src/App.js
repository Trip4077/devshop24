import React from 'react';

import Landing from './views/Landing';

import RegisterDeveloper from './views/authentication/RegiserDeveloper';
import LoginDeveloper from './views/authentication/LoginDeveloper';

import RegisterClient from './views/authentication/RegisterClient';
import LoginClient from './views/authentication/LoginClient';

import { Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Route exact path='/' component={Landing} />

        <Route exact path='/dev/register' render={props => <RegisterDeveloper {...props} />} />
        <Route exact path='/dev/login' render={props => <LoginDeveloper {...props} />} />

        <Route exact path='/client/register' render={props => <RegisterClient {...props} />} />
        <Route exact path='/client/login' render={props => <LoginClient {...props} />} />
      </header>
    </div>
  );
}

export default App;
