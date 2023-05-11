const express = require('express');
const router = require('./routes/index');
const server = express();
const cors = require('cors');
const morgan = require('morgan');
const fileUpload = require('express-fileupload');

server.use(morgan('dev'))
server.use(express.json());
server.use(express.urlencoded({extended:true}))
server.use(cors())
server.use(fileUpload({
    useTempFiles: true,
    tempFileDir: './upload/'
}))


server.use('/', router)

module.exports = server;