import * as firebase from 'firebase';
 
const config = {
    apiKey: "AIzaSyA45mQqmBIrTL9YjpjU8Yniusagdl50H1U",
    authDomain: "expensify-a70d0.firebaseapp.com",
    databaseURL: "https://expensify-a70d0.firebaseio.com",
    projectId: "expensify-a70d0",
    storageBucket: "expensify-a70d0.appspot.com",
    messagingSenderId: "80348174495",
    appId: "1:80348174495:web:5c0bdb78899772ed"
  };
  // Initialize Firebase
  firebase.initializeApp(config);

  const database = firebase.database();

  export {firebase, database as default};

//   //subscriper listen for child removes
//   database.ref('expenses').on('child_removed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val() );
//   });

// //subscriper listen for child changed
// database.ref('expenses').on('child_changed', (snapshot) => {
//   console.log(snapshot.key, snapshot.val() );
// });

// //subscriper listen for child added
// database.ref('expenses').on('child_added', (snapshot) => {
//   console.log(snapshot.key, snapshot.val() );
// });
  
// //   database.ref('expenses').push({
// //     description: '1 lunch meat',
// //     note: 'notes go here',
// //     amount: 12,
// //     createdAt: 1
// //   });
  

//   // database.ref('expenses').push({
//   //   description: '1 pound coffee',
//   //   note: 'notes go here',
//   //   amount: 12,
//   //   createdAt: 1
//   // });
  
  

// // database.ref('expenses')
// // .once('value')
// // .then((snapshot) => {
// //   const expenses = [];
// //   snapshot.forEach((childSnapshot) => {
// //     expenses.push({
// //       id: childSnapshot.key,
// //       ...childSnapshot.val()
// //     });
// //   });
// //   console.log(expenses);
// // });


// //  database.ref('expenses')
// //  .once('value')
// //  .then((snapshot) => {
// //    const expenses = [];
// //    snapshot.forEach((childSnapshot) => {
// //      expenses.push({
// //        id: childSnapshot.key,
// //        ...childSnapshot.val()
// //      });
// //    });
// //    console.log(expenses);
// //  });

// //  const onValueChange = database.ref().on('value', (snapshot) => {
// //      console.log(snapshot.val());     
// //  }, (e) => {
// //    console.log('error fetching ' ,e);
// //  });

  
// //   database.ref('expenses').push({
// //     description: '2 pound coffee',
// //     note: 'notes go here',
// //     amount: 122,
// //     createdAt: 1
// //   });
 
  
  
//   //database.ref('notes/-LjTmOk05o8vIBZdNpzS').remove();

// //  database.ref('notes/-LjTmOk05o8vIBZdNpzS').update({
// //    body: 'buy food'
// //  });
 

// // use push to automatically ceate id

// //  database.ref('notes').push({
// //    title: 'course topics',
// //    body: 'react, python, firebase'
// //  });
  
// //   const firebasenotes= {
// //     notes: {
// //       apoijasdf: {
// //         title: 'First Note',
// //         body: 'Tis is my note'
// //       },
// //       oeoeieie: {
// //         title: 'First Note',
// //         body: 'Tis is my note'
// //       }
// //     }
// //   };

// //   const database = firebase.database();
// //   const notes = [{
// //     id: '12',
// //     title: 'first note',
// //     body: 'this is my note'
// //   },
// //   {
// //     id: '312',
// //     title: 'second note',
// //     body: 'this is my note'
// //   }];

// // database.ref('notes').set(notes);


// //   database.ref().on('value', (snapshot) => {
// //        console.log(snapshot.val());     
// //   }, (e) => {
// //      console.log('error fetching ' ,e);
// //   });

// //   setTimeout(() => {
// //     database.ref('/job/title').set('manager2');
// //   }, 3500);


// //  setTimeout(() => {
// //     database.ref('/job/company').set('acme2');   
// //   }, 3500);
   

  
//   // will run on db changes - callback func with snapshot
//   // const onValueChange = database.ref().on('value', (snapshot) => {
//   //     console.log(snapshot.val());     
//   // }, (e) => {
//   //   console.log('error fetching ' ,e);
//   // });

//   // setTimeout(() => {
//   //   database.ref('age').set(29);
//   // }, 3500);

//   // // cancel subscription
//   // setTimeout(() => {
//   //   database.ref().off(onValueChange);
//   // }, 3500);

//   // setTimeout(() => {
//   //   database.ref('age').set(30);
//   // }, 3500);

  

    
//   // database.ref()
//   // .once('value')
//   // .then((snapshot) => {
//   //   const val = snapshot.val();
//   //   console.log(val);
//   // })
//   // .catch((e) => {
//   //   console.log('Error fetching date', e);
//   // });
  
// //  database.ref().set({
// //      name:'Ken B',
// //      age: 50,
// //      stressLevel: 6,
// //      job: {
// //        title: 'software developer',
// //        company: 'acme'
// //      },
// //      location: {
// //          city: 'Boise',
// //          country: 'United States'
// //      }
// //  
// //  }).then(() => {
// //      console.log('data is saved...');
// //  }).catch((e) => {
// //    console.log('this failed ', e );
// //  }); 

  
  
// //  database.ref().update({
// //    stressLevel: 9,
// //    'job/company': 'goog',
// //    'location/city': 'Seattle'
// //  });

// //  database.ref().update({
// //    job: 'Manager',
// //    'location/city': 'Boston'
// //  });

// //  database.ref().update({
// //    name: 'Joe',
// //    age: 29,
// //    job: 'software developer',
// //    isSingle: null
// //  });

// //database.ref('isSingle')
// //.remove()
// //.then(() => {
// //       console.log('data is removed and saved...');
// // }).catch((e) => {
// //     console.log('this remove failed ', e );
// // });


// //  database.ref('attributes').set({height:73, weight:180})
// //  .then(() => {
// //    console.log('data is saved height weight...');
// //}).catch((e) => {
// //  console.log('this failed ', e );
// //});   

  
