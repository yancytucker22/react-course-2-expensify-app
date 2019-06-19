import React from 'react';
import { Link } from 'react-router-dom';
//import {connect} from 'react-redux';
//import { removeExpense } from '../actions/expenses';

export const ExpenseListItem = ({ id, description, amount, createdAt}) => (
    <div>
    <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
    </Link>    
        <p>{amount} - { createdAt} </p>
    </div> 
);

// gives us access to dispatch prop
//export default connect()(ExpenseListItem);
export default ExpenseListItem;