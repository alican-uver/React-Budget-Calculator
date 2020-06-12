import React from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';

const ExpenseForm = () => {
    return (
        <Form className="text-center" style={{ marginBottom: '50px' }}>
            <Form.Item
                className="form-label"
                label="Charge"
                name="charge"
                rules={[{ required: true, message: 'Please input your charge!' }]}
            >
                <Input type="text" placeholder="Enter charge" />
            </Form.Item>
            <Form.Item
                className="form-label"
                label="Amount"
                name="amount"
                rules={[{ required: true, message: 'Please input your amount!' }]}
            >
                <InputNumber type="number" style={{ width: '100%' }} placeholder="Enter amount" />
            </Form.Item>
            <Form.Item
                className="form-label"
                label="Description"
                name="description"
                rules={[{ required: true, message: 'Please input your description!' }]}
            >
                <Input type="text" placeholder="Enter description" />
            </Form.Item>
            <Button
                type="primary"
                htmlType="submit"
                icon={<SendOutlined />}
            >
                Add
            </Button>
        </Form>
    )
}

export default ExpenseForm
