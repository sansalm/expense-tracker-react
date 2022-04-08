import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    return (
        <li className={transaction.amount}>
            
            {transaction.text} 
            <span>{Math.abs(transaction.amount)} €</span>
            <span>{transaction.volume} l</span>
            <span>{Math.abs(transaction.distance)} km</span>

            <button
                onClick={() => deleteTransaction(transaction.id)} className="delete-btn">
                x
            </button>
        </li>
    )
}