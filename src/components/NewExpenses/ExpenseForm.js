import React, {useState} from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {
    const [enteredTitle, setEnteredTitle] = useState(''); // Starting useState('') khali rakha hai kyunki starting main koi value nahi hogi isliye aur jo bhi value ayegi woh string main convert hojayegi
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('');

    const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value); // If you console event here then you will that we found exact value in event->targer->value
}

const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
}

const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
}

const submitHandler = (event) => {
    event.preventDefault();
    const expenseData = {
        title : enteredTitle,
        amount : enteredAmount,
        date : new Date(enteredDate)
    }
    console.log(expenseData);
}
    return <form onSubmit={submitHandler}>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label >Expense Title</label>
                <input onChange={titleChangeHandler} type="text" />
            </div>
            <div className="new-expense__control">
                <label>Expense Amount</label>
                <input onChange={amountChangeHandler} type="number" min="0.01" step="0.01" />
            </div>
            <div className="new-expense__control">
                <label>Expense Date</label>
                <input onChange={dateChangeHandler} type="date" min="2019-01-01" max="2022-12-28" />
            </div>
        </div>

        <div className="new-expense__actions">
        <button type="submit">Add Expenses</button>
        </div>
    </form>
}

export default ExpenseForm;