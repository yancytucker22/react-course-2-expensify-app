import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import {startAddExpense,
        editExpense,
        startEditExpense,
        removeExpense,
        setExpenses,
        startSetExpenses,
        startRemoveExpense} from '../../actions/expenses';
import expenses from '../fixtures/expenses';
import database from '../../firebase/firebase';

const createMockStore = configureMockStore([thunk]);

beforeEach((done) => {
    const expensesData = {};
    expenses.forEach(({ id, description, note, amount, createdAt }) => {
      expensesData[id] = { description, note, amount, createdAt };
    });
    database.ref('expenses').set(expensesData).then(() => done());
  });
  
// objects and arrays use toEqual.  toBe is ===
test('should set up remove expense action object', () => {
    const action = removeExpense({id: '123abc'});
    expect(action).toEqual({
        type: 'REMOVE_EXPENSE',
        id: '123abc'
    });
} );  
  
test('should remove expense from firebase', (done) => {
    const store = createMockStore({});
    const id = expenses[2].id;
    store.dispatch(startRemoveExpense({ id })).then(() => {
      const actions = store.getActions();
      expect(actions[0]).toEqual({
        type: 'REMOVE_EXPENSE',
        id
      });
      return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot) => {
      expect(snapshot.val()).toBeFalsy();
      done();
    });
  });
  
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

  
test('should edit expense in firebase', () => {
    const store = createMockStore({});
    const id = expenses[0].id;
    const updates = { amount: 21045 };
    store.dispatch(startEditExpense(id, updates)).then(() => {
       const actions =  store.getActions();
       expect(action[0]).toEqual({
           type: 'EDIT_EXPENSE',
           id,
           updates
       });
     return database.ref(`expenses/${id}`).once('value');
    }).then((snapshot) => {
        expect(snapshot.val().amount).toBe(updates.amount); 
        done();  
    });
});


//test('should set up add expense action object with values', () => {
//    const action = addExpense(expenses[2]);
//    expect(action).toEqual({
//        type: 'ADD_EXPENSE',
//        expense: expenses[2]
//    });
//} );

test('should add expense to datastore and store ', (done) => {
    const store = createMockStore([]);
    const expenseData = {
        description: 'Mouse',
        amount: 3000,
        note: 'This one is better',
        createdAt: 1000
    };

    store.dispatch(startAddExpense(expenseData)).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseData
            }
        });
        return database.ref(`expenses'/${actions[0].expense.id}`).once('value');
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseData);
            done();
    }); 
});




test('should add expense with defaults to datastore and store ', (done) => {
    const store = createMockStore([]);
    const expenseDefaults = {
        description: '',
        amount: 0,
        note: '',
        createdAt: 1
    };

    store.dispatch(startAddExpense({})).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'ADD_EXPENSE',
            expense: {
                id: expect.any(String),
                ...expenseDefaults
            }
        });
        return database.ref(`expenses'/${actions[0].expense.id}`).once('value');
        }).then((snapshot) => {
            expect(snapshot.val()).toEqual(expenseDefaults);
            done();
    }); 



} );


test('should setup set expense action object with data', () => {
   const action = setExpenses(expenses);
   expect(action).toEqual({
       type: 'SET_EXPENSES',
       expenses
   }); 
});

test('should fetch the expenses from firebase', (done) => {
    const store = createMockStore({});
    store.dispatch(startSetExpenses()).then(() => {
        const actions = store.getActions();
        expect(actions[0]).toEqual({
            type: 'SET_EXPENSES',
            expenses
        });
        done();
    });
});


// test('should set up add expense action object with default values', () => {
//     const action = addExpense();
//     expect(action).toEqual({
//         type: 'ADD_EXPENSE',
//         expense: {
//             description: '', 
//             note: '', 
//             amount: 0, 
//             createdAt: 0,  
//             id: expect.any(String)
//         }
//     });
// } );

