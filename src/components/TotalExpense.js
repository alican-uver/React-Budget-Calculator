import React, { useContext } from 'react'
import { ExpenseContext } from '../expensecontext/ExpenseContext';


const TotalExpense = () => {
    const [expense, setExpense] = useContext(ExpenseContext);
    
    return (
            <h1 className="text-center" style={{ marginTop: "30px", textTransform: 'uppercase' }}>
            total spending:
            <span style={{ color: 'red' }}>$
                {
                    expense.reduce((acc, curr) => {
                        return acc += curr.amount
                    }, 0)
                }
            </span>
        </h1>
    )
}

export default TotalExpense;
