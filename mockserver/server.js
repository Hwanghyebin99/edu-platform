const express = require('express');
const server = express();
const mongoose = require('mongoose');
require('dotenv').config();
const config = require('./config')
const bodyParser = require('body-parser')
const morgan = require('morgan')
const authMiddleware = require('../mockserver/middlewares/auth');
const session = require('express-session');
const FileStore = require('session-file-store')(session);

server.use(session({  // 2
  secret: 'keyboard cat',  // 암호화
  resave: false,
  saveUninitialized: true,
  store: new FileStore()
}));

const { PORT, MONGO_URI } = process.env;

server.use(bodyParser.urlencoded({extended: false}))
server.use(bodyParser.json())
server.use(morgan('dev'))

server.set('jwt-secret', config.secret)

server.use(express.static('mockserver/public'));
server.use(express.urlencoded({ extended: true }));
server.use(express.json());

// CONNECT TO MONGODB SERVER
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Successfully connected to mongodb'))
  .catch(e => console.error(e));

server.get('/test', (req, res) => {
    res.send("Hello World!");
});
// ROUTERS
server.use('/users', require('./routes/users'));
server.use('/check', authMiddleware);
server.use('/check', require('./routes/check'));

/* handle error */
server.use(function(err, req, res, next) {
  console.error(err.stack);
  res.status(500).send('Something broke!');
});
server.listen(PORT, function () {
    console.log(`Server is running on port ${PORT}!`);
})
