//Main starting point of application
const express = require('express');
const http = require('http');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const mongoose=require('mongoose');
const router = require('./router');

mongoose.connect('mongodb://localhost:auth/auth');

//Create an instance of express
const app = express();

//App setup
app.use(morgan('combined'));
app.use(bodyParser.json({type:'*/*'}));
router(app);

//morgan & bodyparser are both middlewares
//middleware in express -> any incoming request pass into these
//morgan is a loggin framework (log requests)
//body-parser tp parse incoming request to json


//Server setup
const port = process.env.PORT || 3090;

//create server with express
const server = http.createServer(app);
server.listen(port);
console.log('Server listening on', port);
