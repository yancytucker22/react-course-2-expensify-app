import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import expensesReducer from '../reducers/expenses';
import filtersReducer from '../reducers/filters';
import thunk from 'redux-thunk';

// use this because of browser dev tools
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export default () => {
//    console.log('in configurestore...');
    const store = createStore(
        combineReducers({
           expenses: expensesReducer,
           filters: filtersReducer 
        }),
        composeEnhancers(applyMiddleware(thunk)),
    );  
return store;

};
// store creation 
