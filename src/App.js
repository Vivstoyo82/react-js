import ExpenseItem from "./components/ExpenseItem";

function App() {
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
      <h2>Let's get started!</h2>
      <ExpenseItem
        title={expenses.map((element) => {return element.title})}
        amount={expenses.map((element) => {return element.amount})}
        date={expenses.map((element) => {return element.date})}
      ></ExpenseItem>
      {/* <ExpenseItem
        title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
      ></ExpenseItem>
      <ExpenseItem
        title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
      ></ExpenseItem> */}
    </div>
  );
}

export default App;
