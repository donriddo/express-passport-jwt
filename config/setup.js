const http = require('http');
const debug = require('debug');
const app = require('express')();
const routes = require('../components');
const bodyParser = require('body-parser');
const logger = require('morgan');
const fs = require('fs');
const path = require('path');
const rfs = require('rotating-file-stream');

const logDirectory = path.join(__dirname, 'logs');

// ensure log directory exists
fs.existsSync(logDirectory) || fs.mkdirSync(logDirectory)

// create a rotating write stream
var accessLogStream = rfs('access.log', {
  interval: '1d', // rotate daily
  path: logDirectory
})

// setup the logger
app.use(logger('combined', {stream: accessLogStream}))
// const logger = require('debug')('queencake-api:app');
//
// app.use(logger('dev', {
// 	stream: fs.createWriteStream('access.log', {'flags': 'a'})
// }));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use('/', routes);

app.use((req, res, next) => res.status(404).send('Not Found'));

module.exports = app;
