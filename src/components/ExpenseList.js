import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// stateless funcctional component - named export
export const ExpenseList = (props) => (
    <div>
        <h1>Expense List</h1>
        {props.expenses.map((expense) => {
            return <ExpenseListItem key={expense.id} {...expense} />;
        })}
    </div>
);


const mapStateToProps = (state) => {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };    
};
 
//export default (ExpenseList);
//const ConnectedExpenseList = connect((state) => {
//    return {
//      expenses: state.expenses  
//    };    
//})(ExpenseList);

export default connect(mapStateToProps)(ExpenseList);