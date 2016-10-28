import * as mongodb from "mongodb";

export default class MongoConnector {

    database: any;

    constructor() {

    }

    public connect(url: string, options: string[]): Promise<string> {
        return new Promise((resolve, reject) => {
            mongodb.MongoClient.connect(url, options).then(
                (response) => {
                    this.database = response;
                    resolve(response);
                },
                (error) => {
                    reject(error);
                }
            ).catch((ex) => {
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

    public getListOfDatabases(database): any {
        return new Promise(
            (resolve, reject) => {
                database.admin().listDatabases().then(
                    (data) => {
                        resolve(data)
                    },
                    (error) => {
                        reject(error)
                    }
                );
            }
        );
    }


    public ping(database): any {
        return new Promise(
            (resolve, reject) => {
                database.admin().ping().then(
                    (data) => {
                        resolve(data)
                    },
                    (error) => {
                        reject(error)
                    }
                );
            }
        );
    }

     public serverInfo(database): any {
        return new Promise(
            (resolve, reject) => {
                database.admin().serverInfo().then(
                    (data) => {
                        resolve(data)
                    },
                    (error) => {
                        reject(error)
                    }
                );
            }
        );
    }

     public serverStatus(database): any {
         return new Promise(
             (resolve, reject) => {
                 database.admin().serverStatus().then(
                     (data) => {
                         resolve(data)
                     },
                     (error) => {
                         reject(error)
                     }
                 );
             }
         );
     }

}

export function test(instance: MongoConnector) {

}