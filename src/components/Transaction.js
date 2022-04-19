import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <li className={transaction.price < 0 ? 'minus' : 'plus'}>
            
            {transaction.name} 
            <span>{Math.abs(transaction.price).toFixed(2)} €</span>
            <span>{transaction.amount} L</span>
            <span>{transaction.distance} km</span>

            <button
                onClick={() => deleteTransaction(transaction.id)} className="delete-btn">
                x
            </button>
        </li>
    )
}
