import React from "react";
import "./index.css";
import { ExpenseProvider } from "./expensecontext/ExpenseContext";
import ExpenseList from "./components/ExpenseList";
import ExpenseForm from "./components/ExpenseForm";
import TotalExpense from "./components/TotalExpense";
import Title from "./components/Title";
import { Row, Col } from "antd";

function App() {
  return (
    <ExpenseProvider>
      <Row justify="center">
        <Col span={14}>
          <Title title="Budget Calculator" />
          <ExpenseForm />
          <ExpenseList />
          <TotalExpense />
        </Col>
      </Row>
    </ExpenseProvider>
  );
}

export default App;
