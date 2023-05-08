const mongoose = require('mongoose')

// 127.0.0.1
mongoose.connect('mongodb://0.0.0.0:27017/myprueba', {
    
    useUnifiedTopology: true,
    useNewUrlParser: true,
})
    .then(db => console.log('Database is connect'))
    .catch(err => console.log(err))
