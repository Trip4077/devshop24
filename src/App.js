import React from 'react';
import RegisterDeveloper from './views/RegiserDeveloper';
import LoginDeveloper from './views/LoginDeveloper';

import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RegisterDeveloper />
        <LoginDeveloper />
      </header>
    </div>
  );
}

export default App;
