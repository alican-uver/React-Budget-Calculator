import React, { useContext } from 'react';
import { ExpenseContext } from '../expensecontext/ExpenseContext';
import { List, Button } from 'antd';
import { EditOutlined, DeleteFilled } from '@ant-design/icons';

const ExpenseItem = ({ exp }) => {
    const [expense, setExpense] = useContext(ExpenseContext)

    const deleteItem = () => {
        const id = exp.id;
        let tempExpenses = expense.filter(item => item.id !== id);
        setExpense(tempExpenses);
    }

    return (
        <>
            <List.Item
                actions={[<Button type="primary" icon={<EditOutlined />}>Edit</Button>, <Button onClick={deleteItem} type="danger" icon={<DeleteFilled />}>Delete</Button>]}
            >
                <List.Item.Meta
                    title={<div><span>{exp.charge}</span> <span style={{ fontWeight: 'bold', color: 'blue', marginLeft: '20px' }}>{`$${exp.amount}`}</span></div>}
                    description={exp.description}
                />
            </List.Item>
        </>

    )
}

export default ExpenseItem
