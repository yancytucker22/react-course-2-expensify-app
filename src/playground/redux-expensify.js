import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';


const addExpense = (
    {description = '', 
     note = '', 
     amount = 0, 
     createdAt = 0
    } = {}
   ) => ({
      type: 'ADD_EXPENSE',
      expense: {
      id: uuid(),
      description,
      note,
      amount,
      createdAt
  }  
});

const removeExpense = ({id} = {}) => ({
    type: 'REMOVE_EXPENSE',
    id  
});
  
const editExpense = (id, updates) => ({
    type: 'EDIT_EXPENSE',
    id,
    updates       
});
  
const setTextFilter = (text = '') => ({
    type: 'SET_TEXT',
    text  
});

const sortByDate = (sortBy = '') => ({
    type: 'SORT_BY_DATE',
});

const sortByAmount = (sortBy = '') => ({
    type: 'SORT_BY_AMOUNT',
});

const setStartDate = (startDate) => ({
    type: 'SET_START_DATE',
    startDate
});

const setEndDate = (endDate) => ({
    type: 'SET_END_DATE',
    endDate
});


const expensesReducerDefaultState = [];
const expensesReducer = (state = expensesReducerDefaultState, action) => {
    console.log(action.type);

    switch (action.type) {
        case 'ADD_EXPENSE':
//           return state.concat(action.expense); 
           return [
            ...state,
            action.expense
        ]
       case 'REMOVE_EXPENSE':
            return state.filter(({ id })  => id !== action.id);
       case 'EDIT_EXPENSE':
            return state.map( (expense) => {
                if (expense.id === action.id) {
                    return {
                        ...expense,
                        ...action.updates
                    }                        
                } else {
                    return expense
                };
            });
       default:
            return state;    
    }
};


const filtersReducerDefaultState = {
    text: '',
    sortBy: 'amount', //date or amount
    startDate: undefined,
    endDate: undefined
}

const filtersReducer = (state = filtersReducerDefaultState, action) => {

    switch (action.type) {
        case 'SET_TEXT':
            return {
                ...state,
                text: action.text
            }
        case 'SORT_BY_DATE':
            return {
                ...state,
                sortBy: 'date'
            } 
        case 'SORT_BY_AMOUNT':
            return {
                ...state,
                sortBy: 'amount'
            }
        case 'SET_START_DATE':
            return {
                ...state,
                startDate: action.startDate
            }
        case 'SET_END_DATE':
            return {
                ...state,
                endDate: action.endDate
            }
        default:
            return state; 
    }
};

// get visible expenses

const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
       const startDateMatch = typeof startDate !== 'number' || expenses.createdAt >= startDate;
       const endDateMatch = typeof endDate !== 'number' || expenses.createdAt <= endDate;
       const textMatch = expense.description.toLowerCase().includes(text.toLowerCase());

       return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if (sortBy === 'date') {
            return a.createdAt < b.createdAt ? 1 : -1;
        } else if (sortBy === 'amount') {
            return a.amount < b.amount ? 1 : -1; 
        }
    });
};

// store creation
const store = createStore(
    combineReducers({
       expenses: expensesReducer,
       filters: filtersReducer 
    })
);  

store.subscribe( () => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

console.log(store.getState());

const expenseOne = store.dispatch(addExpense({ description: 'Rent', amount: 300, createdAt: 100} ));
const expenseTwo = store.dispatch(addExpense({ description: 'Coffee', amount: 500, createdAt: 300} ));

//store.dispatch(removeExpense({id: expenseOne.expense.id}));
//store.dispatch(editExpense(expenseTwo.expense.id, {  amount:500 }));

//store.dispatch(setTextFilter('e'));
//store.dispatch(setTextFilter('amount'));

store.dispatch(sortByAmount());
//store.dispatch(sortByDate('date'));

//store.dispatch(setStartDate(0));
//store.dispatch(setStartDate());

//store.dispatch(setEndDate(1250));
//store.dispatch(setEndDate());



const demoState = {
    expenses: [{
        id: 'iiririri',
        description: 'January Rent',
        note: 'this is the final payment',
        amount: 54500,
        createdAt: 0
    }],
    filters: {
        text: 'rent',
        sortBy: 'amount', //date or amount
        startDate: undefined,
        endDate: undefined
    }
};

