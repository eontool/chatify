// import mongodb = require('mongodb');
// //const database: symbol = Symbol();
"use strict";
// let db: any = {};
// var collection;
// mongodb.MongoClient.connect("mongodb://localhost:27017/todos").then(
//     (data) => {
//         console.log("Connected!");
//         db = data;
//         collection = db.collection('todos');
//     },
//     (error) => {
//         console.log("failed!", error);
//     }
// ).catch((ex) => {
//     console.log(ex);
// });
// interface Todo {
//     _id: string;
//     text: string;
// }
// function getTodos(callback: (todos: Todo[]) => void) {
//     collection.find().toArray().then(
//         (data) => {
//             callback(data);
//         },
//         (err) => {
//             console.log("error!", err);
//         }
//     );
// }
const mongo_1 = require("./mongo");
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    let url = "mongodb://localhost:27017";
    let options;
    let database;
    let mongo = new mongo_1.default;
    let connection = mongo.connect(url, options).then((data) => {
        console.log(data);
        database = data;
    }, (error) => {
        console.log(error);
    });
    app.get('/test', (req, res) => {
        res.send('test');
    });
    app.get('/api/admin/listdatabases', (req, res) => {
        mongo.getListOfDatabases(database).then((data) => {
            res.send(data);
        }, (error) => {
            console.log(error);
        });
    });
    app.get('/api/admin/ping', (req, res) => {
        mongo.ping(database).then((data) => {
            res.send(data);
        }, (error) => {
            console.log(error);
        });
    });
    app.get('/api/admin/serverinfo', (req, res) => {
        mongo.serverInfo(database).then((data) => {
            res.send(data);
        }, (error) => {
            console.log(error);
        });
    });
    app.get('/api/admin/serverstatus', (req, res) => {
        mongo.serverStatus(database).then((data) => {
            res.send(data);
        }, (error) => {
            console.log(error);
        });
    });
    app.get('/api/todos', (req, res) => {
        // getTodos((data) => {
        //     res.send(data);
        // });
    });
    app.post('/api/todos', function (req, res) {
    });
    app.delete('/api/todos/:todo_id', function (req, res) {
    });
};
