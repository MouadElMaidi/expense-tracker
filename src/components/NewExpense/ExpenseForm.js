import React, { useState } from "react";

import "./ExpenseForm.css";

const ExpenseForm = () => {
  const [data, setData] = useState({
    title: "",
    amount: "",
    date: "",
  });

  const changeHandler = (e) => {
    const { name, value } = e.target;

    setData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  return (
    <form>
      <div className=".new-expense__controls">
        <div className="new-expense__control">
          <label className="label" htmlFor="title">
            Title
          </label>
          <input
            type="text"
            onChange={(e) => changeHandler(e)}
            name="title"
            id="title"
            value={data.title}
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
            onChange={(e) => changeHandler(e)}
            name="amount"
            id="amount"
            value={data.amount}
          />
        </div>
        <div className="new-expense__control">
          <label className="label">Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            onChange={(e) => changeHandler(e)}
            name="date"
            id="date"
            value={data.date}
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
