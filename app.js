var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
require('dotenv').config();

//connect database mysql "QLNT"
// const connect=require('./connect/connectMySQL');

var customerRouter = require('./routes/customer');
var adminRouter = require('./routes/admin');
var landlordsRouter = require('./routes/landlords');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(logger('dev'));
app.use(express.json());


app.use(express.urlencoded({ extended: false }));


app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));



app.use('/', customerRouter);
app.use('/landlords', landlordsRouter);
app.use('/admin', adminRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
