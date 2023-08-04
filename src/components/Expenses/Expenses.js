import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";

const Expenses = (props) => {
  const { items } = props;
  return (
    <Card className="expenses">
      {items.map((item, index) => {
        const { title, amount, date, id } = item;
        return (
          <ExpenseItem
            title={title}
            amount={amount}
            date={date}
            key={id ? id : index}
          />
        );
      })}
    </Card>
  );
};

export default Expenses;
