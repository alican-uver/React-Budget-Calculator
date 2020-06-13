import React, { useState, createContext } from 'react';
import { v4 as uuidv4 } from 'uuid';

const initialExpenses = [
    {
        id: uuidv4(),
        charge: 'rent',
        amount: 1600,
        description: 'this section will be explained'
    },
    {
        id: uuidv4(),
        charge: 'car payment',
        amount: 4000,
        description: 'this section will be explained'
    },
    {
        id: uuidv4(),
        charge: 'credit cart bill',
        amount: 1200,
        description: 'this section will be explained'
    }
]

export const ExpenseContext = createContext();

export const ExpenseProvider = props => {
    const [expense, setExpense] = useState(initialExpenses)

    return (
        <ExpenseContext.Provider value={[expense, setExpense]}>
            {props.children}
        </ExpenseContext.Provider>
    )
}

