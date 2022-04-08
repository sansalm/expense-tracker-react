import React, { useState, useContext } from 'react'
import { GlobalContext } from '../context/GlobalState';

export const AddCar = () => {

    const [text, setText] = useState('');
    const [amount, setAmount] = useState(0);
    const [volume, setVolume] = useState(0);
    const [distance, setDistance] = useState(0);

    const { addTransaction: addCar } = useContext(GlobalContext);

    const onSubmit = e => {
        e.preventDefault();

        const newCar = {
            id: Math.floor(Math.random() * 100000000),
            text: text,
            amount: +amount,
            volume: +volume,
            distance: +distance,
            cars: []

            
        }
        
        addCar(newCar);
        newCar.cars.push(newCar)
        return newCar.text


    }


    return (
        <>
            <h3>Add new fuel consumption information</h3>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <label htmlFor="text">Car name</label>
                    <input type="text" value={text} onChange={(e) => setText(e.target.value)}
                        placeholder="Enter car name..." />
                </div>

                <div className="form-control">
                    <label htmlFor="amount"
                    >Price of refueling <br />
                    </label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)}
                        placeholder="Enter price of refueling..." />
                </div>

                <div className="form-control">
                    <label htmlFor="volume">Refuel volume</label>
                    <input type="text" value={volume} onChange={(e) => setVolume(e.target.value)}
                        placeholder="Enter refuel volume..." />
                </div>

                <div className="form-control">
                    <label htmlFor="distance">Distance driven with refueling</label>
                    <input type="number" value={distance} onChange={(e) => setDistance(e.target.value)}
                        placeholder="Enter distance..." />
                </div>

                <button className="btn" >Add refuel expense</button>
            </form>
        </>
    )
}