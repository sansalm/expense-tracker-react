import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const prices = transactions.map(transaction => transaction.price);
    const amounts = transactions.map(transaction => transaction.amount);

    const totalAmounts = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)

    const expense = (prices
        .filter(item => item < 0)
        .reduce((acc, item) => (acc += item), 0) * -1)
        .toFixed(2);

  return (
      <div className="inc-exp-container">
          <div>
              <h4>Total amounts</h4>
              <p className="money plus">{totalAmounts} L</p>
          </div>
          <div>
              <h4>Total cost</h4>
              <p className="money minus">-{expense} €</p>
          </div>
      </div>
  )
}
