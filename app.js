var express = require('express');
var path = require('path');
const expressOasGenerator = require('express-oas-generator');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var todosRouter = require('./routes/todos');
var indexRouter = require('./routes/index');

var app = express();
expressOasGenerator.init(app, {});
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/todos', todosRouter);


module.exports = app;
