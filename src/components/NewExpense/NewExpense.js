import React from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  return (
    <div className="new-expense">
      <ExpenseForm addNewExpense={props.addNewExpense} />
    </div>
  );
};

export default NewExpense;
