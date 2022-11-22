const express = require ('express')
const api = express()
var bodyParser = require('body-parser')
api.use(bodyParser.urlencoded({
    extended:true
}));
api.use(express.json())



const PORT = 3000

api.listen(PORT,()=>{

    console.log("server is running on Port : ",PORT)
})
api.get('./hello',(req,res)=>{

    res.send("hello world")
    
    console.log(req)
})
api.post('/hello',(req,res)=>{

    res.send("Hello world post")
    console.log(req.body.name)
})
 