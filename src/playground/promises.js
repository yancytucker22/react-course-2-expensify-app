const promise = new Promise((resolve, reject) => {
    setTimeout(() => {
    
        resolve('this is my resolve data');

    }, 2500);

//    reject('something went wrong...');
});

console.log('before...');

promise.then((data) => {
    console.log('1', data);
    return new Promise((resolve, reject) => {
        setTimeout(() => {
        
            resolve('this is my other promise...');
    
        }, 2500);
    
    //    reject('something went wrong...');
    });
//    return 'some date returned';
}).then((str) => {
    console.log('does this run', str);
}).catch((error) => {
    console.log(error)
});

console.log('after...');

