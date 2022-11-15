//http module 


var http = require('http')
var colors = require('colors')

var PORT = 9752
colors.enable()
const server = http.createServer()
server.listen(PORT,()=>{

        console.log(colors.blue('Server is running on a port',PORT))
        console.log('Warning!');
})