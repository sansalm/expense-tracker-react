import React, { useContext } from 'react'
import { Transaction } from './Transaction';
import { GlobalContext } from '../context/GlobalState'

export const TransactionList = () => {
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
                {transactions.map(transaction => (<Transaction key={transaction.id} transaction={transaction} />))}
                
            </ul>
            <h3>Specific info</h3>
        <div className='header-container'>
            <div>
                <h3>Car name</h3>
            </div>
            <div>
                <h3>Expenses</h3>
            </div>
            <div>
                <h3>Total consumption</h3>
            </div>
            <div>
                <h3>Total distance</h3>
            </div>
            <div>
                <h3>€/100 km</h3>
            </div>
            <div>
                <h3>l/100 km</h3>
            </div>
        </div>   
        </>
    )
}