import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const __maxBudget = 20000;

const Budget = () => {
    const { dispatch, budget, expenses, currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const handleBudgetChange = (event) => {
        const totalExpenses = expenses.reduce(
            (total, item) => {
                return ( total = total + item.cost );
            }
        , 0 );
        if(event.target.value > __maxBudget) {
            alert("Upper limit is 20000");
        }
        else if(event.target.value < totalExpenses){
            alert(`Cannot reduce budget to be lower than the expenses (${totalExpenses})`);
        }
        else {
            setNewBudget(event.target.value);
            dispatch({
                type: 'SET_BUDGET',
                payload: event.target.value
            });
        }
    }
    return (
        <div className='alert alert-secondary'>
            <span>Budget: {currency} </span>
            <input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
        </div>
    );
};
export default Budget;
