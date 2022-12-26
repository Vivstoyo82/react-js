import './ExpenseItem.css';

function ExpenseItem(props) {
    // const expenseDate = new Date(2022, 11, 26)
    const LocationofExpenditure = "Pune";

  return (
    <div className='expense-item'>
        <div>{props.date.toString()}</div>
        <div className='expense-item__description'>
            <h2>{props.title}</h2>
            <h2>{'Location ' + LocationofExpenditure}</h2>
            <div className='expense-item__price'>{props.amount}</div>
        </div>
    </div>
  );
}

export default ExpenseItem;
