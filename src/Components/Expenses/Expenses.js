import React, {useState} from 'react';
import './Expenses.css';

import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState(2020);

    const filterChangeHandeler = selectedYear => {
        setFilteredYear(selectedYear);
    };

    return (
        <Card className='expenses'>
            <ExpensesFilter selectedYear={filteredYear} onFilterChange={filterChangeHandeler}/>
            <ExpenseItem
                title={props.expenses[0].title}
                date={props.expenses[0].date}
                amount={props.expenses[0].amount} />
            <ExpenseItem
                title={props.expenses[1].title}
                date={props.expenses[1].date}
                amount={props.expenses[1].amount} />
            <ExpenseItem
                title={props.expenses[2].title}
                date={props.expenses[2].date}
                amount={props.expenses[2].amount} />
            <ExpenseItem
                title={props.expenses[3].title}
                date={props.expenses[3].date}
                amount={props.expenses[3].amount} />
        </Card>

    );
}

export default Expenses;