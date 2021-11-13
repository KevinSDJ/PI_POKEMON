const express = require('express');
const compression= require('compression');
const cookieParser = require('cookie-parser');
const morgan = require('morgan');

const routes = require('./routes/index.js');
const session= require('express-session');
require('dotenv').config()

require('./db.js');

const server = express();

server.name = 'API';


server.use(express.urlencoded({ extended: true, limit: '50mb' }));
server.use(express.json({ limit: '50mb' }));
server.use(compression())
server.use(cookieParser());
server.use(morgan('dev'));

server.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', 'http://localhost:3000'); // update to match the domain you will make the request from
  res.header('Access-Control-Allow-Credentials', 'true');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE');
  next();
});
server.use(session(
  {
    name: 'uID',
    secret:process.env.SECRET_, 
    resave:false,
    saveUninitialized:false,
    cookie:{
      maxAge: 1000 * 60 * 60 * 2 
    }
  }
));

/*server.use((req,res,next)=>{
  console.log(req.session)
  next()
})*/

server.use('/',routes);


// Error catching endware.

server.use((err, req, res, next) => { // eslint-disable-line no-unused-vars
  const status = err.status || 500;
  const message = err.message || err;
  console.error(err);
  res.status(status).send(message);
});

module.exports = server;
