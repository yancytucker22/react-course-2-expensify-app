console.log('utils.js is running');
const square = (x) => x * x;
const add = (a, b) => a + b;
const subtract = (a, b) => a - b;

// do not need export statemn if prefix with 
//export const square = (x) => x * x;
//export const add = (a, b) => a + b;

export { square, add, subtract as default };