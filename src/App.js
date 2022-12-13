import React, { useState } from "react";
import './components/ExpenseItems';
import ExpenseList from "./components/ExpenseList";
import NewExpense from "./components/NewExpense/NewExpense";
import './App.css';

const DUMMY_EXPENSE = [
  { title: 'Bilförsäkring', amount: 269, date: new Date(2022, 2, 28), id: Math.random().toString()},
  { title: 'Blöjor', amount: 49, date: new Date(2021, 1, 28), id: Math.random().toString()}, 
  { title: 'Biobiljetter', amount: 150, date: new Date(2022, 4, 21), id: Math.random().toString()},
  { title: 'dator', amount: 8995, date: new Date(2020, 4, 21), id: Math.random().toString()}  
]

function App() {
  const [ expenses, setExpenses ] = useState(DUMMY_EXPENSE)

  const onAddExpense = (expense) => {
    setExpenses((prevExpenses) => {
      return [ expense, ...prevExpenses ];
    });
  } ;

  const onRemoveExpense = (key) => {
    const filteredExpenses = expenses.filter((expense) => {
      return expense.key !== key
    })
  }


  return (
    <div>
      <h2>Expense tracker</h2>
      <NewExpense onAddExpense={onAddExpense}/>
      <ExpenseList expense={expenses} />
    </div>
  );

}

export default App;
