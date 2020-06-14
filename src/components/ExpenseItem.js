import React, { useContext } from 'react';
import { ExpenseContext } from '../expensecontext/ExpenseContext';
import { List, Button } from 'antd';
import { EditOutlined, DeleteFilled } from '@ant-design/icons';

const ExpenseItem = ({ exp }) => {
    const { deleteItem, editItem } = useContext(ExpenseContext)

    return (
        <>
            <List.Item
                actions={[<Button onClick={() => editItem(exp.id)} type="primary" icon={<EditOutlined />}>Edit</Button>, <Button onClick={() => deleteItem(exp.id)} type="danger" icon={<DeleteFilled />}>Delete</Button>]}
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