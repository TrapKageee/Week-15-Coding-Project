// src/App.js
import React from 'react';
import House from './components/House';

const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <h1>House CRUD App</h1>
      </header>
      <House />
    </div>
  );
};

export default App;
