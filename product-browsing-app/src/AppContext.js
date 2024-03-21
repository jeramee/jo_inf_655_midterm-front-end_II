import React, { createContext, useContext, useReducer } from 'react';

// Define the initial state
const initialState = {
    cart: [],
};

// Define the reducer function
const reducer = (state, action) => {
    switch (action.type) {
        case 'ADD_TO_CART':
            return {
                ...state,
                cart: [...state.cart, action.payload],
            };
        case 'REMOVE_FROM_CART':
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload),
            };
        default:
            return state;
    }
};

// Create the context
const AppContext = createContext();

// Create the AppProvider component to provide state to its children
export const AppProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <AppContext.Provider value={{ state, dispatch }}>
            {children}
        </AppContext.Provider>
    );
};

// Create a custom hook to access the context
export const useAppContext = () => useContext(AppContext);
