import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const IncomeExpenses = () => {
    const { transactions } = useContext(GlobalContext);

    const prices = transactions.map(transaction => transaction.price);
    const amounts = transactions.map(transaction => transaction.amount);
    const distances = transactions.map(transaction => transaction.distance);
    

    const totalAmounts = amounts
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)

    const totalDist = distances
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const totalSum = prices
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const averageCon = ((totalAmounts*100) / totalDist).toFixed(2)

    const averageExp = ((totalSum*100) / totalDist).toFixed(2);

  return (
      <div className="inc-exp-container">
          <div>
              <h4>Total amount</h4>
              <p className="money minus">{totalAmounts} L</p>
          </div>
          <div>
              <h4>Total distance</h4>
              <p className="money minus">{totalDist} km</p>
          </div>
          <div>
              <h4>Average cost</h4>
              <p className="money minus">{averageExp} €/100 km</p>
          </div>
          <div>
              <h4>Average consumption</h4>
              <p className="money minus">{averageCon} L/100 km</p>
          </div>
      </div>
  )
}
