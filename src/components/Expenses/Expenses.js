import React from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={props.onChangeFilter}
          filteredYear={props.filteredYear}
        />
        {props.items.map((item, index) => {
          const { title, amount, date, id } = item;
          return (
            <ExpenseItem title={title} amount={amount} date={date} key={id} />
          );
        })}
      </Card>
    </div>
  );
};

export default Expenses;
