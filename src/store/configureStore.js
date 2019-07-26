import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import authReducer from '../reducers/auth';

// connect reducer to store
// use this because of browser dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
//    console.log('in configurestore...');
    const store = createStore(
        combineReducers({
           expenses: expensesReducer,
           filters: filtersReducer,
           auth: authReducer 
        }),
        composeEnhancers(applyMiddleware(thunk)),
    );  
return store;

};
// store creation 
