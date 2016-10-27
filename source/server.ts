import * as express from "express";
let app = express();
import * as mongoose from "mongoose";
import * as morgan from "morgan";
import * as bodyParser from "body-parser";
import * as methodOverride from "method-override";

mongoose.connect('mongodb://localhost/todos');

app.use(express.static(__dirname + '/public'));
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ 'extended': true }));
app.use(bodyParser.json());
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(methodOverride());

let port = process.env.PORT || 8080;
app.listen(port);
console.log("App listening on port " + port);

//Model

// export interface Todo extends mongoose.Document {
//     text: string;
// };

interface Todos extends mongoose.Document {
    text: string;
};

const TodoSchema = new mongoose.Schema({
    text: { type: String, required: true },
});

const Todo = mongoose.model<Todos>('Todo', TodoSchema);

// app.get('/api/todos', function (req, res) {
//     console.log("api/todos");
//     Todo.find(function (err, todos) {
//         console.log(true);
//         if (err) {
//             res.send(err)
//         }
//         res.json(todos);
//     });
// });

app.get('/api/todos', (request, response) => {
    Todo.find((error, data) => {
        if (error) {
            response.send(error);
        }
        else {
            response.send(data);
        }
    });
});

app.post('/api/todos', function (req, res) {
    Todo.create({
        text: req.body.text
    }, function (err, todo) {
        if (err) {
            res.send(err);
        }
        Todo.find(function (err, todos) {
            if (err)
                res.send(err)
            res.json(todos);
        });
    });

    Todo.create(
        { text: req.body.text },
        (error, data) => {
            if (error) {
                res.send(error);
            }
            else {
                res.send(data);
            }
        }
    );


});

app.delete('/api/todos/:todo_id', function (req, res) {
    Todo.remove(
        { _id: req.params.todo_id },
        (error) => {
            if (error) {
                console.log(error);
                res.sendStatus(500);
            } else {
                res.jsonp({ success: true });
            }
        }
    )
});