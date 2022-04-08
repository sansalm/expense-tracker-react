import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddCar = ({ transaction: car }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <li className={car.amount}>
            
            {car.text} 
            <span>{Math.abs(car.amount)} €</span>
            <span>{car.volume} l</span>
            <span>{Math.abs(car.distance)} km</span>

            <button
                onClick={() => deleteTransaction(car.id)} className="delete-btn">
                x
            </button>
        </li>
    )
}