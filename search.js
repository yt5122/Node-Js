var fs = require("fs");
const { name } = require("./data");
const path = require("path")
var employee =[]
function readData(){

    let emp = fs.readFileSync("employee.json"); //string
    employee = JSON.parse(emp); //object
    


}

/*function readData1(){

    let empl = fs.readFileSync("employee.json")
    console.log(empl.toString());

}*/


function searchData(name){

        readData();

        employee = employee.filter((emp)=>{
            return emp.name == name
        })

        return employee;
}
function searchData1(age){
    
  
  
     readData();
    employee = employee.filter((emp)=>{

        return emp.age == age
    })
    return employee;

}
function searchData2(salary){

    readData();

    employee = employee.filter((emp)=>{
        return emp.salary == salary
    })

    return employee;
}
function searchData3(status){

    readData1();

    employee = employee.filter((emp)=>{
        return emp.status == status
    })

    return employee;
}

module.exports = {
    searchData,
    searchData1,
    searchData2,
    searchData3


}
