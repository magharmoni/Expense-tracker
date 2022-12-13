import react from "react";

const ExpenseButton = (props) => {
    return (
        <div>
            <button
                onClick={props.onCreateExpense}>New Expense</button>
        </div>
    )
}

export default ExpenseButton