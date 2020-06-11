import React, { useState } from 'react';
import './index.css';
import ExpenseList from './components/ExpenseList';
import ExpenseForm from './components/ExpenseForm';
import Alert from './components/Alert';
import { v4 as uuidv4 } from 'uuid';
import { Row, Col } from 'antd';


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

function App() {
    const [expenses, setExpenses] = useState(initialExpenses);

    return (
        <>
            <Alert />
            <Row justify="center">
                <Col span={14}>
                    <h1 style={{ textAlign: 'center' }}>Budget Calculator</h1>
                    <ExpenseForm />
                    <ExpenseList expenses={expenses} />
                    <h1>
                        total spending:
                            <span> $
                              {
                                expenses.reduce((acc, curr) => {
                                    return acc += curr.amount
                                }, 0)
                            }
                        </span>
                    </h1>
                </Col>
            </Row>
        </>
    );
}

export default App;
