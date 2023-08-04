import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [userInput, setUserInput] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const inputChangeHandler = (e) => {
    const { name, value } = e.target;

    setUserInput((prevState) => {
      return { ...prevState, [name]: value };
    });
  };

  const submitHandler = (e) => {
    e.preventDefault();

    const { title, amount, date } = userInput;

    if (title !== "" && amount !== "" && date !== "") {
      const parsedData = {
        ...userInput,
        id: Math.random().toString(),
        amount: parseFloat(userInput.amount),
        date: new Date(userInput.date),
      };

      props.onAddExpense(parsedData);
      setUserInput({
        title: "",
        amount: "",
        date: "",
      });
    }
  };

  return (
    <form onSubmit={submitHandler}>
      <div className=".new-expense__controls">
        <div className="new-expense__control">
          <label className="label" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            onChange={inputChangeHandler}
            name="title"
            id="title"
            value={userInput.title}
          />
        </div>
        <div className="new-expense__control">
          <label className="label" htmlFor="amount">
            Amount
          </label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={inputChangeHandler}
            name="amount"
            id="amount"
            value={userInput.amount}
          />
        </div>
        <div className="new-expense__control">
          <label className="label">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={inputChangeHandler}
            name="date"
            id="date"
            value={userInput.date}
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
