import React, { useContext } from "react";
import { ExpenseContext } from '../expensecontext/ExpenseContext';
import Item from "./ExpenseItem";
import { Button, List } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const ExpenseList = () => {
  const [expense, setExpense] = useContext(ExpenseContext)
  return (
    <>
      <List>
        {expense.map((expense) => {
          return <Item key={expense.id} expense={expense} />;
        })}
      </List>
      <div className="text-center">
        {expense.length > 0 && (
          <Button type="danger" shape="round" icon={<DeleteOutlined />}>
            Clear Expenses
          </Button>
        )}
      </div>
    </>
  );
};

export default ExpenseList;
