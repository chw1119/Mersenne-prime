const Worker = (function(){
    function __cls({id,option,funcName}){

        this.option = option || __cls.static.STANDARD.STANDARD_OPTION;

        this.id            = id ||  __cls.static.STANDARD.STANDARD_ID;
        
        this.func                       = func || "STANDARD_FUNCTION";
        

    }

    __cls.prototype.getOption = function(){

    }

    __cls.prototype.setOption = function(){

    }

)

    __cls.static = Object.freeze({
        OPTION : {
            WORK_IDLE_MODE : 0,
            WORK_HARD_MODE : 1
        }

        STANDARD : {
            STANDARD_ID : 0
            STANDARD_OPTION : 0
        }
    });

    return __cls;
})()