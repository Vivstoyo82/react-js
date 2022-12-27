// import ExpenseItem from "./components/ExpenseItem";
import Expenses from "./components/Expenses";

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
      <Expenses items = {expenses}/>
    </div>
  );
}

export default App