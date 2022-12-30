import React from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => { // Idhar props add baad kiya phele humne ExpenseForm.js main onAddExpense add kiya wahan user se input lekar yahan props ke through value le li
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    return <div className="new-expense">
        <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} />
    </div>
}

export default NewExpense;