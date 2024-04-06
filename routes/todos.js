

var express = require('express');
var router = express.Router();


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

router.post('/', function(req, res, next) {


    const { body } = req;
   
   
    return res.status(201)
    .header('Location', req.url+ body.id )
    .json(body);
   
   
   });
   


module.exports = router;