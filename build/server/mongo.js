"use strict";
const mongodb = require("mongodb");
class MongoConnector {
    constructor() {
    }
    connect(url, options) {
        return new Promise((resolve, reject) => {
            mongodb.MongoClient.connect(url, options).then((response) => {
                this.database = response;
                resolve(response);
            }, (error) => {
                reject(error);
            }).catch((ex) => {
                reject(ex);
            });
        });
    }
    // public startConnection(url: string, options: string[]) {
    //     let connection = this.connect(url, options);
    //     console.log(connection);
    //     connection.then(
    //         (data) => {
    //             this.database = data;
    //             this.database.admin().listDatabases().then(
    //                 (data) => {
    //                     console.log(data);
    //                 }
    //             );
    //             console.log("success!");
    //         },
    //         (error) => {
    //             console.log(error);
    //             console.log("failed!");
    //         }
    //     );
    // }
    getListOfDatabases(database) {
        return new Promise((resolve, reject) => {
            database.admin().listDatabases().then((data) => {
                resolve(data);
            }, (error) => {
                reject(error);
            });
        });
    }
    ping(database) {
        return new Promise((resolve, reject) => {
            database.admin().ping().then((data) => {
                resolve(data);
            }, (error) => {
                reject(error);
            });
        });
    }
    serverInfo(database) {
        return new Promise((resolve, reject) => {
            database.admin().serverInfo().then((data) => {
                resolve(data);
            }, (error) => {
                reject(error);
            });
        });
    }
    serverStatus(database) {
        return new Promise((resolve, reject) => {
            database.admin().serverStatus().then((data) => {
                resolve(data);
            }, (error) => {
                reject(error);
            });
        });
    }
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = MongoConnector;
function test(instance) {
}
exports.test = test;
