const AnimationEventHandler = (function(){
    function __cls (ctx,milli,limit) {
        this.limit =          limit || __cls.static.STANDARD_HANDLER_LIMIT;
        this.milli =    milli || __cls.static.STANDARD_HANDLER_MILLISECOND;
       
        this.context = ctx || __cls.static.STANDARD_HANDLER_CONTEXT_CANVAS;
        this.status =         __cls.static.STANDARD_HANDLER_STATUS.CREATED;

        this.list = [];
    }

    __cls.prototype.setStatus = function(status){
        this.status  = status;
    }

    __cls.prototype.start = function(){
        this.setStatus(__cls.static.STANDARD_HANDLER_STATUS.STARTED);

        this.progress();
    }

     __cls.prototype.progress = function(){
        const ctx = this;
        if(this.list.length){
            //테스크가 존재시에
            this.setStatus(__cls.static.STANDARD_HANDLER_STATUS.WORKING);

            const target = this.list.shift();
            target.execute(this);

            setTimeout(function(){ctx.progress.call(ctx);},target.delay);
        } 

        else{

            this.setStatus(__cls.static.STANDARD_HANDLER_STATUS.SLEEP);
    
        }
        

    }

    __cls.prototype.addActions = function(action){
        if(this.list.length >= this.limit)return;
        this.list.push(action);

        this.progress();
    }


    __cls.static = Object.freeze({
        STANDARD_HANDLER_LIMIT :      100,
        STANDARD_HANDLER_MILLISECOND : 10,
        STANDARD_HANDLER_LOCATION :     0,

        STANDARD_HANDLER_STATUS : {
            CREATED : 0,
            STARTED : 2,
            WORKING : 1,
            SLEEP   : 3,
            CLEARED : 4
        },

        STANDARD_HANDLER_CONTEXT_CANVAS : document.getElementById("canvas-background").getContext("2d")
    })
    return __cls;
})()

const Action = (function(){
    function __cls(func,delay){
        this.func  = func  || function(){console.log("didn't setted function for actions")};
        this.delay = delay || __cls.static.STANDARD_ACTION_STANDARD_DELAY;
    }

     __cls.prototype.execute = function(ctx){
        this.func.call(ctx);
    }

    __cls.static = Object.freeze({
        STANDARD_ACTION_STANDARD_DELAY : 100
    })

    return __cls;
})();

const Animations = (function(){
    function __cls(){

    }

    __cls.divideAction = (function(){
        function Action (){
            
        }

    })()

    return __cls
})()