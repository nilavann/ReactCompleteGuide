import ExpenseForm from "./ExpenseForm";

import "./NewExpense.css"
const NewExpense = (props) => {

    const saveExpenseHandeler = (newExpense) => {
        const newexpense = {
            ...newExpense,
            id: Math.random().toString()
        }
        
        props.onSave(newexpense);
    }

    return (
        <div className="new-expense">
            <ExpenseForm onSave={saveExpenseHandeler}/>
        </div>
    );
}
export default NewExpense;