import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddTransaction = () => {
    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [volume, setVolume] = useState('');
    const [distance, setDistance] = useState('');

    const { addTransaction } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            text,
            amount: +amount,
            volume,
            distance
        }

        addTransaction(newTransaction);
    }

    return (
        <>
            <h3>Add new transaction</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Car name</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                        placeholder="Enter car name..." />
                </div>

                <div className="form-control">
                    <label htmlFor="amount"
                    >Price of refueling <br />
                        (negative = expense, positive = income)
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter price of refueling..." />
                </div>

                <div className="form-control">
                    <label htmlFor="volume">Refuel volume</label>
                    <input type="volume" value={volume} onChange={(e) => setVolume(e.target.value)}
                        placeholder="Enter refuel volume..." />
                </div>

                <div className="form-control">
                    <label htmlFor="distance">Distance driven with refueling</label>
                    <input type="distance" value={distance} onChange={(e) => setDistance(e.target.value)}
                        placeholder="Enter distance..." />
                </div>

                <button className="btn">Add refuel expense</button>
            </form>
        </>
    )
}
