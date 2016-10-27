
import mongodb = require('mongodb');

const database: symbol = Symbol();
let db: any = {};

mongodb.MongoClient.connect("mongodb://localhost:27017/todos", {}).then(
    (data) => {
        console.log("Connected!");
        db = data;
    },
    (error) => {
        console.log("failed!", error);
    }
).catch((ex) => {
    console.log(ex);
});
var collection = db.collection('todos');


interface Todo {
    _id: string;
    text: string;
}

function getTodos(callback: (todos: Todo[]) => void) {
    collection.find().toArray().then(
        (data) => {
            callback(data);
        },
        (err) => {
            console.log("error!", err);
        }
    );
}


export default (app) => {

    console.log("endpoints");
    app.get('/test', (req, res) => {
        res.send('test');
    });

    app.get('/api/todos', (req, res) => {
        getTodos((data) => {
            res.send(data);
        });
    });

    app.post('/api/todos', function (req, res) {

    });

    app.delete('/api/todos/:todo_id', function (req, res) {

    });

}
