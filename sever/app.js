var createError = require('http-errors');
var express = require('express');
var path = require('path');
const mongoose = require("mongoose");
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const bodyParser = require('body-parser');


var indexRouter = require('./routes/index');
// var usersRouter = require('./routes/users');
var owners = require('./routes/owners');

var app = express();

var cors = require('cors');
app.use(cors());


//Body Parser middleware
app.use(bodyParser.urlencoded({extended: false}));
// app.use(bodyParser.json());
app.use(bodyParser.json({limit: '1000kb'}));



//DB config
const db = require("./config/keys").mongoURI;

//connect to MongoDB
mongoose 
  .connect(db, { useNewUrlParser: true })
  .then(() => console.log("MongoDB Connected"))
  .catch(err => console.log(err));

 app.use("/getlogo", express.static(__dirname + '/public/carLogos/'));

//set routes
app.use('/api/owners', owners);

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
// app.use('/users', usersRouter);

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
