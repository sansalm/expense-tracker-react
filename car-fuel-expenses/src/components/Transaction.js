import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const NewCar = ({ car }) => {
    const { deleteCar } = useContext(GlobalContext);

    return (
        <li className={car.amount}>
            
            <span>{car.text}</span>
            <span>{Math.abs(car.amount)} €</span>
            <span>{car.volume} l</span>
            <span>{Math.abs(car.distance)} km</span>

            <button
                onClick={() => deleteCar(car.id)} className="delete-btn">
                x
            </button>
        </li>
    )
}