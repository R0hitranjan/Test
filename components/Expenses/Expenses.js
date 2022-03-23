import React, { useState } from 'react';
//import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';
import ExpenseList from './ExpenseList';





function Expenses(props) {

  let [filteredYear, setFilteredYear] = useState('2020');

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);

  };

  let filteredExpense = props.expenseDetail.filter(expense => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  

  

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        <ExpenseList filteredExpense={filteredExpense}/>
      </Card>
    </div>


  );
}


export default Expenses;