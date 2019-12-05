import React from 'react';

import Nav from './components/nav/nav';
import Home from './views/Home';
import Landing from './views/Landing';
import DevProfile from './views/profiles/DevProfile';
import ClientProfile from './views/profiles/ClientProfile';

import UpdateDev from './views/update/updateDev';
import ClientUpdate from './views/update/clientUpdate';

import RegisterDeveloper from './views/authentication/RegiserDeveloper';
import RegisterClient from './views/authentication/RegisterClient';
import LoginDeveloper from './views/authentication/LoginDeveloper';
import LoginClient from './views/authentication/LoginClient';

import { Route } from 'react-router-dom';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />

        <Route exact path='/' component={Landing} />

        <Route exact path='/dev/register' render={props => <RegisterDeveloper {...props} />} />
        <Route exact path='/dev/login' render={props => <LoginDeveloper {...props} />} />
        <Route exact path='/dev/profile/:id' render={props => <DevProfile {...props} />} />
        <Route exact path='/dev/profile/:id/settings' render={props => <UpdateDev {...props} />} />

        <Route exact path='/client/register' render={props => <RegisterClient {...props} />} />
        <Route exact path='/client/login' render={props => <LoginClient {...props} />} />
        <Route exact path='/client/profile/:id' render={props => <ClientProfile {...props} />} />
        <Route exact path='/client/profile/:id/settings' render={props => <ClientUpdate {...props} />} />

        <Route exact path='/home' render={props => <Home {...props} />} />
      </header>
    </div>
  );
}

export default App;
