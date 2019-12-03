import React from 'react';

import Landing from './views/Landing';
import Home from './views/Home';

import RegisterDeveloper from './views/authentication/RegiserDeveloper';
import LoginDeveloper from './views/authentication/LoginDeveloper';

import RegisterClient from './views/authentication/RegisterClient';
import LoginClient from './views/authentication/LoginClient';

import { Route } from 'react-router-dom';

import './App.css';

function App(props) {
  const logout = () => {
    localStorage.clear()
    window.location.replace('/')
  }

  return (
    <div className="App">
      <header className="App-header">
        <button onClick={logout}>Log Out</button>
        <Route exact path='/' component={Landing} />

        <Route exact path='/dev/register' render={props => <RegisterDeveloper {...props} />} />
        <Route exact path='/dev/login' render={props => <LoginDeveloper {...props} />} />

        <Route exact path='/client/register' render={props => <RegisterClient {...props} />} />
        <Route exact path='/client/login' render={props => <LoginClient {...props} />} />

        <Route exact path='/home' render={props => <Home {...props} />} />
      </header>
    </div>
  );
}

export default App;
