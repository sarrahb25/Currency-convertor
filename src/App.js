import React from 'react';
import logo from './logo.svg';
import './App.css';
import CurrencyCalculator from './components/CurrencyCalculator';
import History from './components/History';

const App = () => {
  return (
    <div className="App">
      <CurrencyCalculator />
      <History />
    </div>
  );
}

export default App;
