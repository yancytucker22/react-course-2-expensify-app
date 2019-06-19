console.log('destructuring...');   
const person = {
    name: 'Andrew',
    age: 27,
    location: {
     city: 'Oviedo',
     temp: 92  
    }
}

// default value example
//const {name = 'Anonymous', age} = person;

//const {city, temp} = person.location;
//console.log(`it's ${temp} in ${city}`);

//console.log(`it's ${name} in ${city}`);

//const book = {
//    title: 'ego is the enemy',
//    author: 'Ryam Holiday',
//    publisher: {
//        name: 'Penguin'
//    }  
//



//const {name: publisherName = book.publisher.name} = book;

//console.log(publisherName);

//console.log(book.publisher.name);

 

//array destructuring


const address = ['1299 juniper street', 'oviedo', 'Florida', '32765'];

const [street, city, state, zip] = address;

console.log(`you are in ${city}`);


const item = ['coffee', '$2.00','$2.50', '$2.75'];
const [itemSold, small, medium, large] = item;

console.log(`a medium ${itemSold} is ${medium}`) 