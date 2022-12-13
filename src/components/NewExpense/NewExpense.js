import React, {useState} from "react";
import ExpenseButton from "./ExpenseButton";
import ExpenseForm from "./ExpenseForm";
import './NewExpense.css';



const NewExpense = (props) => {
    const [ createNew, setCreateNew ] = useState(false);

    const onCreateExpense = () => {
        setCreateNew(true);
    }

    const onCancelExpense = () => {
        setCreateNew(false);
    }

    const saveExpenseHandler = (enteredExpenseData) => {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        }
        console.log(expenseData)
        props.onAddExpense(expenseData);
    };

    return (
        <div className="new-expense">
            { createNew === true && <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancelExpense={onCancelExpense}/>}
            { createNew !== true && <ExpenseButton onCreateExpense={onCreateExpense}/>}
        </div>
    )
}

export default NewExpense ;