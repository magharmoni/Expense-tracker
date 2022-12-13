import React, {useState} from "react";
import ExpenseItems from "./ExpenseItems";
import ExpenseFilter from "./ExpenseFilter";
import Chart from "./Charts/Chart";
import ExpensesChart from './ExpensesChart';
import Card from './UI/Card';
import './ExpenseList.css' ;

const ExpenseList = (props) => {

    const [ year, setYear ] = useState('Visa Alla')

    let expenses = [ ...props.expense ];

    const onChangeYear = (selectedYear) => {
        setYear(selectedYear)
        //console.log(year)

    }  

    const filteredExpenses = expenses.filter(expense => {
        return expense.date.getFullYear().toString() === year || year === 'Visa Alla';
    });

    let expensesContent = <p className="expenses-list__fallback">No expenses found</p>;

    if (filteredExpenses.length > 0 ){
        expensesContent = filteredExpenses.map((expense, i) => {
            return ( 
                <ExpenseItems 
                    amount={expense.amount} 
                    title={expense.title} 
                    date={expense.date}
                    key={expense.id}
                /> 
            )
        })
    }

    return (
        <div>
            <Card className='expenses'>
                <li>
                <ExpenseFilter selectedYear={year} onChangeYear={onChangeYear}/>
                <ExpensesChart expenses={filteredExpenses}/>
                {expensesContent}
                </li>
            </Card>
        </div>
    );
};

export default ExpenseList;