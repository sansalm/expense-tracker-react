import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const CarTotal = ({ element }) => {
    return (
        <li className='plus'>

            {element.name}
            <span>{Math.abs(element.price).toFixed(2)} €</span>
            <span>{element.amount} L</span>
            <span>{element.distance} km</span>
        </li>
    )
}
