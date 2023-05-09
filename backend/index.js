const server = require('./src/server.js')
require('./src/mongodb')

server.listen(3001, () => {
    console.log('%s listening at 3001')
})