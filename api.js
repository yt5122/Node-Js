const express = require ('express');
const { name } = require('./data');
const api = express()
var search = require("./search");


api.use(express.urlencoded({
    extended:true
}));
api.use(express.json())


const PORT = 3000

api.listen(PORT,()=>{

    console.log("server is running on Port : ",PORT)
})
//api.get('/hello',(req,res)=>{

  //  res.send("hello world")
    
    
//})
api.post('/hello',(req,res)=>{
    var reqbody = req.body;
    res.json({
            message:"record added...",
            data: reqbody
            });
    //res.send("Hello world post")
    //console.log(req.body.name)
})

api.delete('/hello/:id',(req,res)=>{
    
    console.log(req.params.id)

    var id = req.params.id;
    res.json({

            id:id,
            message:"is deleted",
        })
    })

api.put('/user/:id',(req,res)=>{

    try {
            var id = req.params.id;
            if(id==1){
                throw new Error("user not found")
            }else{

                    res.json({
                            message:"user updated",
                            id:id,
                            data:req.body.data

                    })
            }
    } catch (err) {
        
        res.status(404).send(err.message)
    }
    
})






api.get("/employee/:name",(req,res)=>{

    try {
        
        var name = req.params.name;
        if(name == 1){
            throw new Error("enter valid data ")
        }else{

            var employees = search.searchData(name)
            res.json(employees)
        }
    } catch (err) {
        res.status(404).send(err)
    
    }
  

})

api.get("/employees/:age",(req,res)=>{

    try {
          var age = req.params.age;
          if(age < 18){
            throw new Error(" please enter age greater than 20")
        }else{
            var employee = search.searchData1(age)
            res.json(employee)
           
        }
    } catch (err) {
        
        res.status(404).send(err.message)
    }


})
api.get("/employees1/:salary",(req,res)=>{
    try{
    
    
    
        var salary = req.params.salary;
        if(salary < 20000) {
            throw new Error("employee not found");
        }else{
            var employee = search.searchData2(salary)
    
            res.json(employee)    
        }
        
    }catch(err){
        res.status(404).send(err.message);
    
    }
    })
    api.get("/employeess/:status",(req,res)=>{
        try{
            0 == false
            1 == true
            var status = req.params.status;
           
            if(status == false) {
                throw new Error("employee not found");
            }else{
                var employees = search.searchData3(status)
                
                res.json(employees)    
            }
            
        }catch(err){
            res.status(404).send(err.message);
        
        }
        })
        