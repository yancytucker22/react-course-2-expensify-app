import expensesReducer from '../../reducers/expenses'
import expenses from '../fixtures/expenses';
import moment from 'moment';

test('should set default state ', () => {
    const state = expensesReducer(undefined, {type: '@@INIT'});
    expect(state).toEqual([]);
});

test('should remove expense by id ', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: expenses[1].id
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('should not remove expense by id if not found', () => {
    const action = {
        type: 'REMOVE_EXPENSE',
        id: -1
    }
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});


test('should add expense ', () => {
    const expense = {
        id: 44,
        description: 'Beer',
        note: '',
        amount: 29500,
        createdAt: 20000
    };
    const action = {
        type: 'ADD_EXPENSE',
        expense
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('should edit expense by id ', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id: expenses[1].id,
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state[1].amount).toBe(amount);
});
 
test('should not edit expense by id if not found  ', () => {
    const amount = 122000;
    const action = {
        type: 'EDIT_EXPENSE',
        id:  '-1',
        updates: {
            amount
        }
    };
    const state = expensesReducer(expenses, action);
    expect(state).toEqual(expenses);
});  

test ('should set expenses', () => {
    const action = {
        type: 'SET_EXPENSES',
        expenses: [expenses[1]]
    };  
    const state = expensesReducer(expenses, action);
    expect(state).toEqual([expenses[1]]);

});