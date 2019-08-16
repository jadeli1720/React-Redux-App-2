import React from 'react';
import './App.css';

import Header from './components/header';
import CharatersList from './components/charactersList'

function App() {
  return (
    <div className="App">
      <Header />
      <CharatersList />
    </div>
  );
}

export default App;
