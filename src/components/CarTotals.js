import React, { useContext } from 'react'
import { GlobalContext } from '../context/GlobalState'

export const CarTotals = () => {
    const { transactions } = useContext(GlobalContext);
    
    const calculations = [...transactions];
    
    let uniqueNames = [calculations[0].name];

    let allUniqueItems = [calculations[0]];
    calculations.forEach((calculation, index, array) => {
        if (index > 0) {
            let nameIndex = (Array.from(uniqueNames).indexOf(calculation.name));
            if (nameIndex == -1) {
                allUniqueItems.push(calculation);
                uniqueNames.push(calculation.name);
            }
            else {
                allUniqueItems[nameIndex].price += calculation.price;
                allUniqueItems[nameIndex].amount += calculation.amount;
                allUniqueItems[nameIndex].distance += calculation.distance;
            }
        }
    });

    console.log(allUniqueItems);

    return (
        <div className="inc-exp-container">
            <div>
                <h4>Totals per car</h4>
                <p className="money plus">{uniqueNames}</p>
            </div>
        </div>
    )
}