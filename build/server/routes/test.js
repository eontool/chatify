"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (app) => {
    console.log("test");
    app.get('/test', (request, response) => {
        response.send("chatify");
    });
};
