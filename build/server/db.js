"use strict";
const mongodb = require("mongodb");
const database = Symbol();
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = () => {
    var db;
    mongodb.MongoClient.connect("mongodb://localhost:27017/Todos", {}).then((data) => {
        console.log("success!");
        db = data;
    }, (error) => {
        console.log("fail!");
    }).catch((ex) => {
        console.log(ex);
    });
    function getTodos(callback) {
        db.collection('todos', function (error, todos_collection) {
            if (error) {
                console.error(error);
                return;
            }
            todos_collection.find({}, { '_id': 1 }).toArray(function (error, todoobjs) {
                if (error) {
                    console.error(error);
                    return;
                }
                callback(todoobjs);
            });
        });
    }
};
//         });
//     }
// }
// // interface Todos extends mongoose.Document {
// //     text: string;
// // };
// // const TodoSchema = new mongoose.Schema({
// //     text: { type: String, required: true },
// // });
// // const Todo = mongoose.model<Todos>('Todo', TodoSchema);
// //mongodb connection
// import mongodb = require('mongodb');
// export default () => {
// // var server = new mongodb.Server('localhost', 27017);
// // var db = new mongodb.Db('Todos', server, { w: 1 });
// // db.open(() => { });
// let connection = mongodb.MongoClient.connect("mongodb://localhost:27017/Todos", {}).then(
//     (db) => {
//         console.log("success")
//         console.log(db);
//     },
//     (error) => {
//         console.log("fail");
//     }
// ).catch((ex) => {
//     console.log(ex);
// });
// console.log(connection);
// }
// // var MongoClient = require('mongodb').MongoClient, Server = require('mongodb').Server;
// // var mongoClient = new MongoClient(new Server('localhost', 27017));
// // mongoClient.open(function(err, mongoClient) {
// //     var db1 = mongoClient.db("mydb");
// //     mongoClient.close();
// // });
// export interface Todo {
//     _id: string;
//     text: string;
// }
// // function getTodos(callback: (todos: Todo[]) => void) {
// //     db.collection('todos', function(error,todos_collection) {
// //         if(error) { console.error(error); return; }
// //         todos_collection.find({}, { '_id': 1 }).toArray(function(error, todoobjs) {
// //            if(error) { console.error(error); return; }
// //            callback(todoobjs);
// //         });
// //     });
// // } 
