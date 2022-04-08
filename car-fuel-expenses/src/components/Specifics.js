import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const CarSpecs = () => {
    const { transactions } = useContext(GlobalContext);

    const name = transactions.map(transaction => transaction.text)

    const sameCars = []

    const found = transactions.some(el => el.text === name)
    if (found) sameCars.push(found)
    transactions.forEach(car => console.log(car))

    console.log(sameCars)


    return (
        <>
            <h4>Specific info</h4>
            <div className="inc-exp-container">
                <div className='header-container'>
                    <div>
                        <h4>Car name</h4>
                        <p className='money minus'>car</p>
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
            </div>
        </>
    )
}
            