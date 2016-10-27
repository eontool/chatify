// interface Todos extends mongoose.Document {
//     text: string;
// };
"use strict";
// const TodoSchema = new mongoose.Schema({
//     text: { type: String, required: true },
// });
// const Todo = mongoose.model<Todos>('Todo', TodoSchema);
//mongodb connection
const mongodb = require("mongodb");
// var server = new mongodb.Server('localhost', 27017);
// var db = new mongodb.Db('Todos', server, { w: 1 });
// db.open(() => { });
let connection = mongodb.MongoClient.connect("mongodb://localhost:27017/Todos", {}).then((db) => {
    console.log("success");
    return db;
    //console.log(db);
}, (error) => {
    console.log("fail");
}).catch((ex) => {
    console.log(ex);
});
console.log(connection);
Object.defineProperty(exports, "__esModule", { value: true });
// function getTodos(callback: (todos: Todo[]) => void) {
//     db.collection('todos', function(error,todos_collection) {
//         if(error) { console.error(error); return; }
//         todos_collection.find({}, { '_id': 1 }).toArray(function(error, todoobjs) {
//            if(error) { console.error(error); return; }
//            callback(todoobjs);
//         });
//     });
// }
exports.default = (app) => {
    console.log("main");
    app.get('/api/todos', (req, res) => {
        res.send("endpoint > /api/todos");
    });
    app.post('/api/todos', function (req, res) {
    });
    app.delete('/api/todos/:todo_id', function (req, res) {
    });
};
