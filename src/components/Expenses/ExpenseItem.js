import React, { useState } from 'react';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';
// import ExpenseForm from '../NewExpenses/ExpenseForm';


const ExpenseItem = (props) => {
  const [title, setTitle] = useState(props.title);
  const [amount, setAmount] = useState(props.amount);

const clickHandler = () => {
  setTitle('Updated!'); 
  console.log(title);
};

const expenseHandler = () => {
  setAmount(1000); 
  console.log(amount);
};

  return (
    <Card className='expense-item'>
      <ExpenseDate date={props.date} />
      <div className='expense-item__description'>
        <h2>{title}</h2>
        <button onClick={expenseHandler}>Change Expense</button>
        <div className='expense-item__price'>Rs.{amount}</div>
        <button onClick={clickHandler}>Change Title</button>
      </div>
    </Card>
  );
}

export default ExpenseItem;