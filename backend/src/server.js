const express = require('express');
const router = require('./routes/index');
const server = express();
const cors = require('cors');
const morgan = require('morgan');
// const fileUpload = require('express-fileupload');
const multer = require('multer')

const storage = multer.diskStorage({
    destination: './public/upload/',
    filename: (req, file, cb) => {
        cb(null,file.originalname)
    }
})

const upload = multer({storage})

server.use(morgan('dev'))
server.use(express.json());
server.use(express.urlencoded({extended:false}))
server.use(cors())
server.use(upload.single('image'))
// server.use(fileUpload({
//     useTempFiles: true,
//     tempFileDir: './src/public/upload' // ./upload/
// }));

server.use('/', router)

module.exports = server;