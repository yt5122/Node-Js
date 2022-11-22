//http module 



var data = require('./data')
var userdata = require('./filehandling/user')
var http = require('http')
var colors = require('colors')

var PORT = 5122
colors.enable()

const server = http.createServer()
server.listen(PORT,()=>{

        console.log(colors.blue('Server is running on a '))
        console.log(colors.bold('',PORT))
        //console.log('Warning!');
        //userdata.readDataFromFile()
    ///userdata.writeDataToFile()
        //userdata.appendDataToFile()
        //userdata.createFolder()
       //userdata.movefile()
        userdata.copyfile()
        //userdata.removeFolder()
        console.log(data.name)
        console.log(data.data)
        console.log(data.sum(200,2))
})