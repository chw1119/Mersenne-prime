const fs = require("fs");

module.exports = class MersennePrime {
    static createWorkerId(){
        return Math.random().toString(24).substr(3) + Math.random().toString(24).substr(3);
    }
    
    constructor({filePath,interval}){
        this.interval = interval;
        this.filePath = filePath;

        this.status = MersennePrime.static.status.STATUS_READY;

        this.__interval = null;

        this.now = 1n;
        

    }

    init(){
        this.status = MersennePrime.static.status.STATUS_START;
        
    }

    work (){

    }

    start (context) {
        const ctx = context || this;

        ctx.__interval = setInterval(function(){
            ctx.work.call(ctx);
        },ctx.interval)
    }


}

MersennePrime.static = Object.freeze({
    status : {
        STATUS_READY : 0,
        STATUS_START : 1
    }
});

module.exports = MersennePrime;