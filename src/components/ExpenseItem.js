import React from 'react';
import { List, Button } from 'antd';
import { EditOutlined, DeleteFilled } from '@ant-design/icons';

const ExpenseItem = ({ expense }) => {

    console.log(expense)
    return (
        <>
            <List.Item
                actions={[<Button type="primary" icon={<EditOutlined />}>Edit</Button>, <Button type="danger" icon={<DeleteFilled />}>Delete</Button>]}
            >
                <List.Item.Meta
                    title={<h2>{expense.charge}</h2>}
                    description={expense.description}
                />
            </List.Item>
        </>

    )
}

export default ExpenseItem
