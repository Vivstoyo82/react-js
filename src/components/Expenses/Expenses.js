import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";
import Card from '../UI/Card'

const Expenses = (props) => {
  return (
    <Card className="expenses">
      {props.items.map(function (expenses) {
        return <ExpenseItem
          key = {expenses.id}
          title={expenses.title}
          amount={expenses.amount}
          date={expenses.date} />;
      })}
    </Card>
  );
}

export default Expenses; 