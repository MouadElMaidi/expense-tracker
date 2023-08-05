import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filteredExpenses = props.items.filter(
    (expense) => expense.date.getFullYear().toString() === filteredYear
  );

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          onChangeFilter={filterChangeHandler}
          filteredYear={props.filteredYear}
        />
        {filteredExpenses.map((item) => {
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
