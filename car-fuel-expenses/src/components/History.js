import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { NewCar } from './Transaction';

export const History = () => {
    const { cars } = useContext(GlobalContext);

    console.log(cars['text'])

    return (
        <>
            <h3>History</h3>
                <div className="inc-exp-container">
                    <div>
                        <h4>Car name</h4>
                        <p className='money minus'>car</p>
                    </div>
                    <div>
                        <h3>Expenses</h3>
                    </div>
                    <div>
                        <h3>Refuel volume</h3>
                    </div>
                    <div>
                        <h3>Distance driven</h3>
                    </div>
                </div>
            
            <ul className="list li">
                {cars.map(car => (<NewCar key={car.id} car={car} />))}
            </ul>
        </>
    )
}
