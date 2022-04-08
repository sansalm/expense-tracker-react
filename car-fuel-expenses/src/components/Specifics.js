import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { AddCar } from './Transaction';

export const CarSpecs = () => {
    const { transactions } = useContext(GlobalContext);

    {transactions.map(transaction => (<AddCar key={transaction.text} transaction={transaction.text} />))}



    return (
        <>
            <h4>Specific info</h4>
            <div className="inc-exp-container">
                <div>
                    <h4>Car name</h4>
                    <ul className="list li">
                    </ul>
                </div>
                <div>
                    <h4>Expenses</h4>
                </div>
                <div>
                    <h4>Total consumption</h4>
                </div>
                <div>
                    <h4>Total distance</h4>
                </div>
                <div>
                    <h4>Average consumption</h4>
                </div>
                <div>
                    <h4>Average expenses</h4>
                </div>
            </div>   
        </>
    )
}
            