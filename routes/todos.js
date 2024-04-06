

var express = require('express');
var router = express.Router();
var createError = require('http-errors')

/* GET todos listing. */
router.get('/', function(req, res, next) {
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

router.get('/:todoId', function(req, res, next) {
    const todoId = parseInt(req.params.todoId); 
   
    const todos = [
        {
            id: 123,
            name: "1st Todo",
            targetDate: new Date(),
            done: false
        }
    ];
    const todo = todos.find(todo => todo.id === todoId);
    
    if (todo) {
        res.json(todo); // Return the todo if found
    } else {
        createError(404, 'Todo not found')
    }
});

router.post('/', function(req, res, next) {


    const { body } = req;
   
   
    return res.status(201)
    .header('Location', req.url+ body.id )
    .json(body);
   
   
   });
   


module.exports = router;