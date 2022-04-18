import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const CarTotals = () => {
    const { transactions } = useContext(GlobalContext);

    let uniqueTransactions = [];

    transactions.forEach(({ id, name, price, amount, distance }, index) => {
        if (index === 0) {
            uniqueTransactions.push({
                name: name,
                price: price,
                amount: amount,
                distance: distance,
            });
        }
        uniqueTransactions.forEach((element, index) => {
            if (index === 0) {
                return;
            }
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
        if (!obj && index != 0) {
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
        <div className="inc-exp-container">
            <div>
                <h4>Totals per car</h4>
                <p className="money plus">{transactions[0].name}</p>
            </div>
        </div>
    )
}