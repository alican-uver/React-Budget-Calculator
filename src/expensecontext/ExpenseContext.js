import React, { useState, createContext, useEffect } from 'react';

// get local storage
const initialExpenses = localStorage.getItem('expenses') ? 
JSON.parse(localStorage.getItem('expenses')) : []

export const ExpenseContext = createContext();

export const ExpenseProvider = props => {
    const [expense, setExpense] = useState(initialExpenses);
    const [edit, setEdit] = useState(false);
    const [id, setId] = useState(0);
     // Form States
     const [chargeValue, setChargeValue] = useState('');
     const [amountValue, setAmountValue] = useState(0);
     const [descriptionValue, setDescriptionValue] = useState('')

     //add Local Storage
     useEffect(() => {
         localStorage.setItem('expenses', JSON.stringify(expense));
     }, [expense])

    const clearItems = () => {
        setExpense([])
    }
    
    const deleteItem = id => {
        let tempExpenses = expense.filter(item => item.id !== id);
        setExpense(tempExpenses);
    }

    const editItem = id => {
        let tempExpense = expense.find(item => item.id === id);
        let {charge, amount, description} = tempExpense;
        setChargeValue(charge);
        setAmountValue(amount);
        setDescriptionValue(description);
        setEdit(true)
        setId(id)
    } 

    const expensecontext = {
        expense,
        setExpense,
        edit, 
        setEdit,
        //Functions
        clearItems,
        deleteItem,
        editItem,
        // Form State
        chargeValue,
        amountValue,
        descriptionValue,
        setChargeValue,
        setAmountValue,
        setDescriptionValue,
        id
    }
    
    return (
        <ExpenseContext.Provider value={expensecontext}>
            {props.children}
        </ExpenseContext.Provider>
    )
}

