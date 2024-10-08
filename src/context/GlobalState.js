import React, {createContext, useReducer} from 'react';
import AppReducer from './AppReducer';


const initialState = {
    transaction: [
    { id: 1, text: 'Flower', amount: -20 },
    { id: 2, text: 'Salary', amount: 300 },
    { id: 3, text: 'Book', amount: -10 },
    { id: 4, text: 'Camera', amount: 150 },
    ]
}
//creating the context

export const GlobalContext = createContext(initialState);

// creating the provider

export const GlobalProvider = ({children}) => {
    const [state, dispach] = useReducer(AppReducer, initialState);

    return (
        <GlobalContext.Provider value={{
            transaction: state.transaction
        }}>
            {children}
        </GlobalContext.Provider>

    )
}

