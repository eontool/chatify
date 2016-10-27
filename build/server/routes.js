"use strict";
const mongodb = require("mongodb");
const database = Symbol();
let db = {};
mongodb.MongoClient.connect("mongodb://localhost:27017/todos", {}).then((data) => {
    console.log("Connected!");
    db = data;
}, (error) => {
    console.log("failed!", error);
}).catch((ex) => {
    console.log(ex);
});
var collection = db.collection('todos');
function getTodos(callback) {
    collection.find().toArray().then((data) => {
        callback(data);
    }, (err) => {
        console.log("error!", err);
    });
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
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
};
