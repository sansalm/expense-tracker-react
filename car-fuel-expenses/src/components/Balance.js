import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Balance = () => {
  const { cars } = useContext(GlobalContext);

  const amounts = cars.map(car => cars.amount);
  const total = amounts.reduce((acc, item) => (acc += item), 0).toFixed(2);


  return (
    <>
      <h4>Total refueling expenses</h4>
      <h2>{total} €</h2>
    </>
  )
}