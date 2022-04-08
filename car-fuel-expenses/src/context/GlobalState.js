import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    cars: [
        { id: 1, text: 'Car1', amount: 20, volume: 20, distance: 200 },
        { id: 2, text: 'Car2', amount: 300, volume: 20, distance: 200 },
        { id: 3, text: 'Car3', amount: 10, volume: 20, distance: 200 },
        { id: 4, text: 'Car4', amount: 150, volume: 20, distance: 200 },
        { id: 5, text: 'Car4', amount: 200, volume: 20, distance: 200 }
    ]
}


// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions that make calls to reducer
    function deleteCar(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addCar(car) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: car
        });
    }

    return (<GlobalContext.Provider value={{
        cars: state.cars,
        deleteCar,
        addCar,
    }}>
        {children}
    </GlobalContext.Provider>);
}