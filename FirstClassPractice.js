const http = require('http').Server;


class FirstClassPractice extends http{
    constructor(){
        super()
        this.on('request', this.resHello);
        this.listen(3000);
    }
    resHello=(request , respond)=>{
        respond.end("Hello world lala")
    }
}

module.exports= new FirstClassPractice();