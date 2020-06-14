import React, { useContext } from "react";
import { ExpenseContext } from '../expensecontext/ExpenseContext';
import Item from "./ExpenseItem";
import { Button, List } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const ExpenseList = () => {
  const [expense, setExpense] = useContext(ExpenseContext);

  const clearItems = () => {
    setExpense([])
  }

  return (
    <>
      <List>
        {expense.map((exp) => {
          return <Item key={exp.id} exp = {exp}  />;
        })}
      </List>
      <div className="text-center">
        {expense.length > 0 && (
          <Button onClick={clearItems} type="danger" shape="round" icon={<DeleteOutlined />}>
            Clear Expenses
          </Button>
        )}
      </div>
    </>
  );
};

export default ExpenseList;
