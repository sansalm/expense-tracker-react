import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const Totals = () => {
    const { cars } = useContext(GlobalContext);

    const totSum = cars.map(car => car.amount);
    const totDistances = cars.map(car => car.distance);
    const totVolumes = cars.map(car => car.volume)


    const totalSum = totSum
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const totalDist = totDistances
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);
    
    const totalVol = totVolumes
        .filter(item => item > 0)
        .reduce((acc, item) => (acc += item), 0)
        .toFixed(2);

    const averageCon = (totalVol/totalDist).toFixed(2)

    const averageExp = (totalSum/totalVol).toFixed(2);
    
  return (
      <div className="inc-exp-container">
          <div>
              <h4>Total consumption</h4>
              <p className="money minus">{totalSum} €</p>
          </div>
          <div>
              <h4>Total distance</h4>
              <p className="money minus">{totalDist} km</p>
          </div>
          <div>
              <h4>Average expenses</h4>
              <p className="money minus">{averageExp} €/100 km</p>
          </div>
          <div>
              <h4>Average consumption</h4>
              <p className="money minus">{averageCon} l/100 km</p>
          </div>
      </div>
  )
}