import React from 'react';
import {Headers} from './components/Headers';
import {Balance} from './components/Balance';
import { IncomeExpense } from './components/income_exp_cont';
import { History } from './components/History';
import { Transaction } from './components/Transaction';

import './App.css';

function App() {
  return (
    <div>
      <Headers/>
      <div className='container'>
        <Balance />
        <IncomeExpense />
        <History />
        <Transaction/>

      </div>
    </div>

  );
}

export default App;
