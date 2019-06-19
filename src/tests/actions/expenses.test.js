import {addExpense, editExpense, removeExpense} from '../../actions/expenses';

// objects and arrays use toEqual.  toBe is ===
test('should set up remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
} );  

test('should set up edit expense action object', () => {
    const action = editExpense('12', {note: 'hello world'});
    expect(action).toEqual({
        type: 'EDIT_EXPENSE',
        id: '12',
        updates: {
            note: 'hello world'
        }
    });
} );

  


test('should set up add expense action object with values', () => {
    const expenseData = {
        description: 'Rent',
        amount: 109500,
        createdAt: 1000,
        note: 'last months rent'
    }; 
    const action = addExpense(expenseData);
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            ...expenseData,  
            id: expect.any(String)
        }
    });
} );

test('should set up add expense action object with values', () => {
    const action = addExpense();
    expect(action).toEqual({
        type: 'ADD_EXPENSE',
        expense: {
            description: '', 
            note: '', 
            amount: 0, 
            createdAt: 0,  
            id: expect.any(String)
        }
    });
} );

