import React, { useContext } from 'react'
import { Transaction_History } from './transaction_history';
import { GlobalContext } from '../context/GlobalState'

export const History = () => {
  const {transaction} = useContext(GlobalContext);
  return (
    <>
        <h3>History</h3>
        <ul id="list" className="list">
          {transaction.map(transaction => (<Transaction_History transaction = {transaction}/>))}
         
      </ul>
      
    </>
  )
}


