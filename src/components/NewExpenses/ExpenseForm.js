import React from "react";
import './ExpenseForm.css';

const ExpenseForm = () => {

    const titleChangeHandler = (event) => {
    console.log(event.target.value); // If you console event here then you will that we found exact value in event->targer->value
}

const AmountChangeHandler = (event) => {
    console.log(event.target.value)
}

const dateChangeHandler = (event) => {
    console.log(event.target.value)
}
    return <form>
        <div className="new-expense__controls">
            <div className="new-expense__control">
                <label >Expense Title</label>
                <input onChange={titleChangeHandler} type="text" />
            </div>
            <div className="new-expense__control">
                <label>Expense Amount</label>
                <input onChange={AmountChangeHandler} type="number" min="0.01" step="0.01" />
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