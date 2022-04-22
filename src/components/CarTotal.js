import React, { useContext } from 'react'

export const CarTotal = ({ element }) => {

    const averageCon = ((element.amount*100) / element.distance).toFixed(1);

    const averageExp = ((element.price*100) / element.distance).toFixed(2);

    return (
        <li className='plus'>

            {element.name}
            <span>{Math.abs(element.price).toFixed(2)} €</span>
            <span>{element.amount} L</span>
            <span>{element.distance} km</span>
            <span>{averageExp} €/100 km</span>
            <span>{averageCon} L/100 km</span>
        </li>
    )
}
