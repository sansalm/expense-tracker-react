import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState(0);
    const [amount, setAmount] = useState('');
    const [distance, setDistance] = useState('');

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            name,
            price: +price,
            amount: +amount,
            distance: +distance
        }

        addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Add a new refuel expense</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Car name</label>
                    <input type="text" value={name} onChange={(e) => setName(e.target.value)}
                        placeholder="Enter car name..." />
                </div>

                <div className="form-control">
                    <label htmlFor="price">Price of refueling</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)}
                        placeholder="Enter price of refueling..." />
                </div>

                <div className="form-control">
                    <label htmlFor="amount">Refuel amount</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter refuel amount..." />
                </div>

                <div className="form-control">
                    <label htmlFor="distance">Distance driven with refueling</label>
                    <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)}
                        placeholder="Enter distance..." />
                </div>

                <button className="btn">Add refuel expense</button>
            </form>
        </>
    )
}
