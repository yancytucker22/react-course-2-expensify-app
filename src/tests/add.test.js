const add = (a, b) => a + b;
const generateGreeting = (name) => `Hello ${name}!`; 

test('should add two numbers', () => {
    const result = add(3,4);

    expect(result).toBe(7);

    if (result !== 7) {
        throw new Error('add did not work');
    }
});

test('Hello Test', () => {
    const result = generateGreeting('Ken');

    expect(result).toBe('Hello Ken!');

});
