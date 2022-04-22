import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  const { transactions } = useContext(GlobalContext);

  const prices = transactions.map(transaction => transaction.price);
  const total = Math.abs(prices.reduce((acc, item) => (acc += item), 0).toFixed(2));

  return (
    <>
      <h4>Total cost</h4>
      <h1>-{total} €</h1>
    </>
  )
}
