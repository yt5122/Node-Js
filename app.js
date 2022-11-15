//http module 
var http = require('http')

var PORT = 3000
const server = http.createServer()
server.listen(PORT,()=>{

        console.log('Server is running on a port',PORT)
})