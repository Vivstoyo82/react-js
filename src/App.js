import React from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const App = () => {
  const expenses = [
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



  return (
    <div>
      <NewExpense/>
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App