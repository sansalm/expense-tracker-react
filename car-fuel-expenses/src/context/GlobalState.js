import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

// Initial state
const initialState = {
    transactions: [
        { id: 1, text: 'Car1', amount: 20, volume: 20, distance: 200 },
        { id: 2, text: 'Car2', amount: 300, volume: 20, distance: 200 },
        { id: 3, text: 'Car3', amount: 10, volume: 20, distance: 200 },
        { id: 4, text: 'Car4', amount: 150, volume: 20, distance: 200 }
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