import React, { useContext } from 'react';
import { ExpenseContext } from '../expensecontext/ExpenseContext';
import { Form, Input, InputNumber, Button } from 'antd';
import { SendOutlined } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';

const ExpenseForm = () => {
    // Context
    const { expense, setExpense, edit, setEdit, chargeValue, amountValue, descriptionValue,
        setChargeValue, setAmountValue, setDescriptionValue, id
    } = useContext(ExpenseContext);


    const handleCharge = e => {
        setChargeValue(e.target.value);
    }

    const handleAmount = value => {
        setAmountValue(value);
    }

    const handleDescription = e => {
        setDescriptionValue(e.target.value);
    }

    const handleSubmit = e => {
        e.preventDefault();
        if (chargeValue !== '' &&
            descriptionValue !== '' &&
            amountValue > 0) {
            if (edit) {
                console.log("editing")
                let tempExpenses = expense.map(item => {
                    return item.id === id ? { ...item, charge: chargeValue, amount: amountValue, description: descriptionValue } : item
                })
                console.log(tempExpenses)
                setExpense(tempExpenses)
                setEdit(false)
            }
            else {
                const singleExpense = { id: uuidv4(), charge: chargeValue, description: descriptionValue, amount: amountValue }
                setExpense([...expense, singleExpense])
            }
            setChargeValue('');
            setAmountValue(0);
            setDescriptionValue("");
        }
        else {
            // Display Alert
        }
    }

    return (
        <Form onSubmitCapture={handleSubmit} className="text-center" style={{ marginBottom: '50px' }}>
            <Form.Item
                className="form-label"
                label="Charge"
                rules={[{ required: true, message: 'Please input your charge!' }]}
            >
                <Input
                    type="text"
                    placeholder="Enter charge"
                    name="charge"
                    value={chargeValue}
                    onChange={handleCharge}
                />
            </Form.Item>
            <Form.Item
                className="form-label"
                label="Amount"
                rules={[{ required: true, message: 'Please input your amount!' }]}
            >
                <InputNumber
                    value={amountValue}
                    onChange={handleAmount}
                    type="number"
                    style={{ width: '100%' }}
                    name="amount"
                    placeholder="Enter amount" />
            </Form.Item>
            <Form.Item
                className="form-label"
                label="Description"
                rules={[{ required: true, message: 'Please input your description!' }]}
            >
                <Input
                    value={descriptionValue}
                    onChange={handleDescription}
                    type="text"
                    name="description"
                    placeholder="Enter description" />
            </Form.Item>
            <Button
                type="primary"
                htmlType="submit"
                icon={<SendOutlined />}
            >
                {edit ? 'Edit' : 'Submit'}
            </Button>
        </Form>
    )
}

export default ExpenseForm


