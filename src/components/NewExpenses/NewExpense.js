import React, { useState } from "react";
import './NewExpense.css';
import ExpenseForm from "./ExpenseForm";


const NewExpense = (props) => { // Idhar props add baad kiya phele humne ExpenseForm.js main onAddExpense add kiya wahan user se input lekar yahan props ke through value le li
    const [isEditing, setIsEditing] = useState(false);
   
    const saveExpenseDataHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id : Math.random().toString()
        }
        // console.log(expenseData);
        props.onAddExpense(expenseData);
    };

    const setIsEditingHandler = () => {
        setIsEditing(true);
    }

    const stopEditingHandler = () => {
        setIsEditing(false);
    }

    return <div className="new-expense">
        {!isEditing && <button onClick={setIsEditingHandler}>Add Expense</button>}
        {isEditing && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditingHandler} />} {/*onCancel name is up to you*/}
    </div>
}

export default NewExpense;