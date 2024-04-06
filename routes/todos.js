

var express = require('express');
var router = express.Router();
var createError = require('http-errors')

/* GET todos listing. */

router.get('/', function (req, res, next) {
    res.json([
        {
            id: 123,
            name: "1st Todo",
            targetDate: new Date(),
            done: false
        }
    ]
    );
});

/* GET todo by id. */
router.get('/:todoId', function (req, res, next) {
    const todoId = parseInt(req.params.todoId);

    const todos = [
        {
            id: 123,
            name: "1st Todo",
            targetDate: new Date(),
            done: false
        }
    ];
    const todo = todos?.find(todo => todo.id === todoId);

    if (todo) {
        res.json(todo); // Return the todo if found
    } else {
        createError(404, 'Todo not found')
    }
});


/* Create todo. */
router.post('/', function (req, res, next) {
    const { body } = req;
    return res.status(201)
        .header('Location', req.url + body.id)
        .json(body);
});

/* Delete todo by id. */
router.delete('/:todoId', function (req, res, next) {
    const todoId = parseInt(req.params.todoId);
    let indexToDelete = -1;
    const todos = [
        {
            id: 123,
            name: "1st Todo",
            targetDate: new Date(),
            done: false
        }
    ];
    for (let i = 0; i < todos.length; i++) {
        if (todos[i].id === todoId) {
            indexToDelete = i;
            break;
        }
    }

    if (indexToDelete !== -1) {
        todos.splice(indexToDelete, 1);
        res.json({ message: 'Todo deleted successfully' });
    } else {
        res.status(404).json({ message: 'Todo not found' });
    }
});

/* Update todo by id. */
router.put('/:todoId', function (req, res, next) {
    const todoId = parseInt(req.params.todoId);
    const todos = [
        {
            id: 123,
            name: "1st Todo",
            targetDate: new Date(),
            done: false
        }
    ];
    const updatedTodo = req.body;
    const indexToUpdate = todos.findIndex(todo => todo.id === todoId);

    if (indexToUpdate !== -1) {
        todos[indexToUpdate] = updatedTodo;
        res.json({ message: 'Todo updated successfully', updatedTodo });
    } else {
        res.status(404).json();
    }
});


module.exports = router;