import { createStore } from 'redux';



const incrementCount = ({ incrementBy = 1 } = {}) =>  ({ 
      type: 'INCREMENT',
      incrementBy
//      incrementBy: incrementBy 
     });

const  decrementCount  = ({decrementBy = 1} = {} ) => ({
    type:'DECREMENT',
    decrementBy
})

const setCount = ( count ) => ({
    type: 'SET',
    count
});

const resetCount = () => ({
    type: 'RESET'
});

// Reeducer
// 1 reducers are pure functions
// 2 never change state of action
//

const countReducer = (state = { count : 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
        return {
            count: state.count + action.incrementBy
        };
        case 'DECREMENT':
        return { 
            count: state.count - action.decrementBy
        };
        case 'SET':
        return {
            count: action.count
        };
        case 'RESET':
        return {
            count: 0
        };
        default: 
            return state;
    }
};

const store = createStore (countReducer);


const unsubscribe = store.subscribe( () => {
    console.log('unsubscribe store.subscribe called...'); 
    console.log(store.getState()); 
});   


store.dispatch(incrementCount( {incrementBy: 5} ));

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10}));

store.dispatch(setCount({ count: 101 }));

