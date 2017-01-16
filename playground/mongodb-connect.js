// const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log('Unable to connect to MongoDB server');
    }
    console.log('Connected to MongoDB server');

    // db.collection('Todos').insertOne({
    //     text: 'Somthing to do',
    //     completed: false
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert todo ', err);
    //     }

    //     console.log(JSON.stringify(result.ops, undefined, 2));
    // });

    //Insert new doc into Users (name, age, location)
    // db.collection('Users').insertOne({
    //     name: 'Ron Goldzimer',
    //     age: 29,
    //     location: '5 Bergson street, Tel Aviv'
    // }, (err, result) => {
    //     if (err) {
    //         return console.log('Unable to insert user ', err);
    //     }

    //     console.log(result.ops[0]._id.getTimestamp());
    // });


    db.close();
});