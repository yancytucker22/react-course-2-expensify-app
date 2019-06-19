import moment from 'moment';
import filtersReducer from '../../reducers/filters';

test('should set up default filter values', () => {
    const state = filtersReducer(undefined, {type: '@@INIT'});

    expect(state).toEqual({
        text: '',
        sortBy: 'date',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    });
});


test('should set up sort by to amount', () => {
    const state = filtersReducer(undefined, {type: 'SORT_BY_AMOUNT'});
    expect(state.sortBy).toBe('amount');
});

test('should set up sort by date', () => {
    const currentState = {
        text: '',
        startDate: undefined,
        endDate: undefined,
        sortBy: 'amount'
    };
    const action = { type: 'SORT_BY_DATE'};
    const state = filtersReducer(currentState, action); 
    expect(state.sortBy).toBe('date');
});

test('should set up text filter', () => {
    const currentState = {
        text: 'hello',
        startDate: undefined,
        endDate: undefined,
        sortBy: ''
    };
    const action = { type: 'SET_TEXT_FILTER'};
    const state = filtersReducer(currentState, action); 
    expect(state.text).toBe('hello');
});

test('should set up startDate filter', () => {
    const startDate = moment();
    const action = {
         type: 'SET_START_DATE',
         startDate
        };
    const state = filtersReducer(undefined, action); 
    expect(state.startDate).toEqual(startDate);
}); 

test('should set up endDate filter', () => {
    const endDate = moment();
    const action = {
         type: 'SET_END_DATE',
         endDate
        };
    const state = filtersReducer(undefined, action); 
    expect(state.endDate).toEqual(endDate);
}); 

 