import React, { useState } from "react";
import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css";

const NewExpense = (props) => {
  const [showExpenseForm, setShowExpenseForm] = useState(false);

  return (
    <div className="new-expense">
      {showExpenseForm ? (
        <ExpenseForm
          onAddExpense={props.onAddExpense}
          showExpenseForm={showExpenseForm}
          setShowExpenseForm={setShowExpenseForm}
        />
      ) : (
        <button type="button" onClick={() => setShowExpenseForm(true)}>
          Add New Expense
        </button>
      )}
    </div>
  );
};

export default NewExpense;
