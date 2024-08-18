import React from 'react';
import {Headers} from './components/Headers';
import {Balance} from './components/Balance';
import { IncomeExpense } from './components/income_exp_cont';
import { History } from './components/History';
import { Transaction } from './components/Transaction';
import { GlobalProvider } from './context/GlobalState';
import './App.css';

function App() {
  return (
    <GlobalProvider>
      <Headers/>
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <History />
        <Transaction/>

      </div>
    </GlobalProvider>

  );
}

export default App;
