import React from "react";
import Item from "./ExpenseItem";
import { Button, List } from "antd";
import { DeleteOutlined } from "@ant-design/icons";

const ExpenseList = ({ expenses }) => {
  return (
    <>
      <List>
        {expenses.map((expense) => {
          return <Item key={expense.id} expense={expense} />;
        })}
      </List>
      <div className="text-center">
        {expenses.length > 0 && (
          <Button type="danger" shape="round" icon={<DeleteOutlined />}>
            Clear Expenses
          </Button>
        )}
      </div>
    </>
  );
};

export default ExpenseList;
