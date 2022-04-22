import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'
import { CarTotal } from './CarTotal';

export const CarTotals = () => {
    const { transactions } = useContext(GlobalContext);

    let uniqueTransactions = [];

    transactions.forEach(({ id, name, price, amount, distance }, index) => {
        uniqueTransactions.forEach((element, index) => {
            let nameToCheck = element.name;

            if (nameToCheck === name) {
                element.price += price;
                element.amount += amount;
                element.distance += distance;
            } else {
                return;
            }
        });
        let obj = uniqueTransactions.find(o => o.name === name);
        if (!obj) {
            uniqueTransactions.push({
                name: name,
                price: price,
                amount: amount,
                distance: distance,
            });
        }
    });

    console.log(uniqueTransactions);

    return (
        <div>
            <h3>Totals per car</h3>
            <ul className='list'>
                {uniqueTransactions.map(element => (<CarTotal key={element.name}
                    element={element} />))}
            </ul>
        </div>
    )
}