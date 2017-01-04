var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var nodeMailer = require('nodemailer');
var xoauth2 = require('xoauth2');

var index = require('./routes/index');
var contact = require('./routes/contact');
var services = require('./routes/services');

//service-pages template
var computerRepair = require('./routes/computer-repair');
var dataRecovery = require('./routes/data-recovery');
var softwareSolutions = require('./routes/software-solutions');
var mobileTroubleshoot = require('./routes/mobile-troubleshoot');
var networkTroubleshoot = require('./routes/network-troubleshoot');
var pcTuneUp = require('./routes/pc-tune-up');
var cloudService = require('./routes/cloud-service');
var accessoriesPeripherals = require('./routes/accessories-peripherals');

var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/contact', contact);
app.use('/services', services);

app.use('/computer-repair', computerRepair);
app.use('/data-recovery', dataRecovery);
app.use('/software-solutions', softwareSolutions);
app.use('/mobile-troubleshoot', mobileTroubleshoot);
app.use('/network-troubleshoot', networkTroubleshoot);
app.use('/pc-tune-up', pcTuneUp);
app.use('/cloud-service', cloudService);
app.use('/accessories-peripherals', accessoriesPeripherals);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
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
