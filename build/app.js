"use strict";
const express = require("express");
let app = express();
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
var path = require('path');
app.use(express.static(__dirname + '/public'));
app.use(bodyParser.urlencoded({ 'extended': true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());
let port = process.env.PORT || 8080;
app.listen(port, () => {
    console.log("App started at", port, app.settings.env);
});
const routes_1 = require("./server/routes");
routes_1.default(app);
app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/'));
});
exports.App = app;
