var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var cors = require('cors')

require('dotenv').config()

var indexRouter = require('./routes/index.route');
var usersRouter = require('./routes/users.route');
var loginRouter = require("./routes/login.route");
var brandsRouter = require("./routes/brands.route");
var cateogriesRouter = require("./routes/category.route");
var productsRouter = require("./routes/products.route");

const { errorHandler } = require('./middlewares/errorHandler.middleware');
const { authMiddleware } = require('./middlewares/auth.middleware');

var app = express();

// view engine setup
app.use(cors())
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
// app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use("/login", loginRouter);
app.use("/products", productsRouter);
app.use("/brands", brandsRouter);
app.use("/categories", cateogriesRouter);

app.use(authMiddleware);
app.use(errorHandler);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

module.exports = app;
