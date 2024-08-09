import React from 'react';
import './ExpenseList.css';

function ExpenseList() {
  const expenses = ['Rent', 'Utilities', 'Groceries'];

  return (
    <div className="ExpenseList">
      <h2>Expense List</h2>
      <ul>
        {expenses.map((expense, index) => (
          <li key={index}>{expense}</li>
        ))}
      </ul>
    </div>
  );
}

export default ExpenseList;
