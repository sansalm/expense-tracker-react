import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const Transaction = ({ transaction }) => {
    const { deleteTransaction } = useContext(GlobalContext);

    const sign = transaction.price < 0 ? '-' : '+';

    return (
        <li className={transaction.price < 0 ? 'minus' : 'plus'}>
            
            {transaction.name} 
            <span>{sign}${Math.abs(transaction.price)}</span>
            <span>{transaction.amount} L</span>
            <span>{transaction.distance} km</span>

            <button
                onClick={() => deleteTransaction(transaction.id)} className="delete-btn">
                x
            </button>
        </li>
    )
}
