import React from 'react';
import { Link } from 'react-router-dom';
import moment from 'moment';
import numeral from 'numeral';

//import {connect} from 'react-redux';
//import { removeExpense } from '../actions/expenses';

export const ExpenseListItem = ({ id, description, amount, createdAt}) => (
    <div>
    <Link to={`/edit/${id}`}>
        <h3>{description}</h3>
    </Link>     
        <p>
            {numeral(amount/100).format('$0,0.00')}
             - 
            {moment(createdAt).format('MMM Do, YYYY')} 
        </p>
    </div> 
);

// gives us access to dispatch prop
//export default connect()(ExpenseListItem);
export default ExpenseListItem;