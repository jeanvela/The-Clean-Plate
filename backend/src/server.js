const express = require('express');
const router = require('./routes/index');
const server = express();
const cors = require('cors');
const morgan = require('morgan');

server.use(morgan('dev'))
server.use(express.json());
server.use(express.urlencoded({extended:true}))
server.use(cors())


server.use('/', router)

module.exports = server;