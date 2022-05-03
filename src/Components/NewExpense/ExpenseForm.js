import React, {useState} from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {

    const [newExpense, setExpense] = useState( {
        title: "",
        amount: "",
        date: ""
    });
    
    const titleChangeHandeler = (event) => {
        
        setExpense( (previousState) => {
            let curSate =  {
                ...previousState,
                title: event.target.value}
            return curSate;
        });
    }

    const amountChangeHandeler = (event) => {
        setExpense( (previousState) => {
            return {
                ...previousState,
                amount: event.target.value}
        });
    }

    const dateChangeHandeler = (event) => {
        setExpense( (previousState) => {
            return {
                ...previousState,
                date: event.target.value}
        });
    }

    const submitHandeler = (event) => {
        event.preventDefault();

        const expenseData = {
            title: newExpense.title,
            amount: newExpense.amount,
            date: new Date(newExpense.date)
        }

        props.onSave(expenseData);

        setExpense( {
            title: "",
            amount: "",
            date: ""
        });
    }

    return (
        <form onSubmit={submitHandeler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Tiltle</label>
                    <input type="text" value={newExpense.title}  onChange={ titleChangeHandeler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number"  min="0.01" step="0.01" value={newExpense.amount}  onChange={ amountChangeHandeler}/>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" min="2019-01-01" value={newExpense.date}  max="2022-12-31" onChange={ dateChangeHandeler}/>
                </div>
            </div>
            <div className='new-expense__actions'>
                <button type='submit'> Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;