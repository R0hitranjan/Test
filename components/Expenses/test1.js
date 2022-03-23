import React, { useState } from 'react';
import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';
import ExpenseFilter from './ExpenseFilter';





function Expenses(props) {

  let [filteredYear, setFilteredYear] = useState('2020');

  function filterChangeHandler(selectedYear) {
    setFilteredYear(selectedYear);

  };

  let filteredExpense = function filteredExpense() {
    props.expenseDetail.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    });
  };

  return (
    <div>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
        {filteredExpense.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>


  );
}


export default Expenses;

/*function Expense(prop) {
    return (
       <div>
         {prop.expense.map((item) => {
           return (
             <ExpenseItem
               title={item.title}
               amount={item.amount}
               date={item.date}
             ></ExpenseItem>
           );
         })}
       </div>
     );
   } */