import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
// import Card from './Card'

function Expenses(props) {
  return (
    <div className="expenses">
      {props.map((expense)=>
      {
        return  <ExpenseItem
        title={props.items.title}
        amount={props.items.amount}
        date={props.items.date}
      />
      })}
    </div>
  );
}

export default Expenses; 