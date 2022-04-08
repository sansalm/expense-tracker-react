import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { AddCar } from './Transaction';

export const History = () => {
    const { transactions } = useContext(GlobalContext);
    
    return (
        <>
            <h3>History</h3>
                <div className="header-container">
                    <div>
                        <h3>Car name</h3>
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
                {transactions.map(transaction => (<AddCar key={transaction.id} transaction={transaction} />))}
            </ul>
    
        </>
    )
}