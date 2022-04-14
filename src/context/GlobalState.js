import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    transactions: [
        { id: 1, name: 'Car1', price: -100, amount: 20, distance: 200 },
        { id: 2, name: 'Car2', price: -100, amount: 20, distance: 200 },
        { id: 3, name: 'Car3', price: -100, amount: 20, distance: 200 },
        { id: 4, name: 'Car4', price: -100, amount: 20, distance: 200 },
        { id: 5, name: 'Car4', price: -100, amount: 20, distance: 200 },
        { id: 6, name: 'Car4', price: -100, amount: 20, distance: 200 },
    ]
}

// Create context
export const GlobalContext = createContext(initialState);

// Provider component
export const GlobalProvider = ({ children }) => {
    const [state, dispatch] = useReducer(AppReducer, initialState);

    // Actions that make calls to reducer
    function deleteTransaction(id) {
        dispatch({
            type: 'DELETE_TRANSACTION',
            payload: id
        });
    }

    function addTransaction(transaction) {
        dispatch({
            type: 'ADD_TRANSACTION',
            payload: transaction
        });
    }

    return (<GlobalContext.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction,
    }}>
        {children}
    </GlobalContext.Provider>);
}