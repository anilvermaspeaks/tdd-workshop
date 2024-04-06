

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


module.exports = router;