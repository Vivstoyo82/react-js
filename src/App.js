import React, { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet paper",
    amount: 100,
    date: new Date(2022, 10, 22)
  },
  {
    id: "ed2",
    title: "New TV",
    amount: 8000,
    date: new Date(2022, 9, 10)
  },
  {
    id: "ed3",
    title: "Car insurance",
    amount: 10000,
    date: new Date(2022, 11, 26)
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  

  const addExpenseHandler=(expense) => {
    // console.log(expense);
    setExpenses(prevExpenses =>{
      return [expense, ...prevExpenses];
    })     //you should use this special function form for this state updating function. So it would be passed a function as argument
       //to this state updating function and that function will automatically receive the latest state snapshot.
       //So here we would then get our previous expenses automatically by React.
    
}

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App