import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const CarTotals = () => {
    const { transactions } = useContext(GlobalContext);

    let sumsAndDuplicates = [];

    transactions.forEach((element, index, array) => {
        let obj = sumsAndDuplicates.find((o, i) => {
            if (o.name == element.name) {
                sumsAndDuplicates[i].price += element.price;
                sumsAndDuplicates[i].amount += element.amount;
                sumsAndDuplicates[i].distance += element.distance;
            }
        });
        sumsAndDuplicates.push({
            name: element.name,
            price: element.price,
            amount: element.amount,
            distance: element.distance,
        });
    });

    console.log(sumsAndDuplicates);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Totals per car</h4>
                <p className="money plus">{transactions[0].name}</p>
            </div>
        </div>
    )
}