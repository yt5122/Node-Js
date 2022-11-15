//http module 
const { default: chalk } = require('chalk')
var http = require('http')

var PORT = 9898
const server = http.createServer()
server.listen(PORT,()=>{

        console.log(chalk.blue('Server is running on a port',PORT))
})