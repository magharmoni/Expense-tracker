import './ExpenseItems.css';
import './ExpenseDate';
import ExpenseDate from "./ExpenseDate";

function ExpenseItems(props) {

    return (
        <div className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{props.title}</h2>
                <div className="expense-item__price">
                    {props.amount} kr
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default ExpenseItems;