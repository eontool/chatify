import * as express from "express";
let app = express();
import * as bodyParser from "body-parser";
import * as methodOverride from "method-override";

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



import mainRoutes from "./server/routes";
mainRoutes(app);

app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname + '/public/'));
});

export var App = app;