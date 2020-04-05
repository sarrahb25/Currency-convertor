import React from 'react';
import './App.css';
import CurrencyCalculator from './components/CurrencyCalculator';
import History from './components/History';
import HistoryFront from './components/HistoryFront/historyFront';

const App = () => {
  return (
    <div className="App">
      <CurrencyCalculator />
      <History />
      <HistoryFront />
    </div>
  );
}

export default App;
