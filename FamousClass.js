
const httpServer = require('http').Server;
const fs = require('fs');

const util= require('util');
const readFilePromise = util.promisify(fs.readFile)

class FamousClass extends httpServer{
    constructor(){
        super()
        this.listen(8000);
        this.on('request', this.getInfoFromTxtFile)
    }
    getInfoFromTxtFile=(req , res)=>{
        readFilePromise('./txtsFile/InfoTxt.txt')
        .then(data=>{res.end(data)})
        .catch(err=>{res.end("Error!!!!!!!!")}) 
    }
}

module.exports = new FamousClass();