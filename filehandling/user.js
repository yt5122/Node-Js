var fs = require("fs");
const fs1 = require('fs-extra')
const src = "./filehandling/folder1/input.txt"
const dest = "./filehandling/input.txt"

function readDataFromFile(){

    var x = fs.readFileSync('./filehandling/input.txt','utf-8')
    console.log(x)
}
function writeDataToFile(){
     var d = "hello this is file.....";
    fs.writeFileSync("./filehandling/input.txt", d);   
 
    }
    
    function appendDataToFile() {
        var d1 = "lkknhniuguih ";
        fs.appendFileSync("./filehandling/input.txt", d1);
      }

function removeFile(){

    if (fs.existsSync("./filehandling/input.txt")) {
        fs.unlinkSync("./filehandling/input.txt");
      }
        
}
function createFolder() {
    fs.mkdirSync("./filehandling/folder1");
  }

function removeFolder() {
    
  if (fs.existsSync("./filehandling/folder1")) {
    fs.rmdirSync("./filehandling/folder1");
  }
}
function copyfile(){

    fs.copyFileSync("./filehandling/input.txt","./filehandling/folder1/input.txt")

}
function movefile(){
    fs1.move(src,dest,err =>{
        if (err) return console.error(err)
        console.log('success!')
    })

}


module.exports={
    readDataFromFile,
    writeDataToFile,
    appendDataToFile,
    removeFile,
    createFolder,
    removeFolder,
    copyfile,
   movefile,
}