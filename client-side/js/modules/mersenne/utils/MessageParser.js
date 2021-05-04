const MessageParser = (function(){
    function __cls(str){
        this.dataStr = str;
    }

    __cls.prototype.parseData = function(){
        try {
            const tempData = JSON.parse(this.dataStr);

            this.number = BigInt(tempData.numberStr);
            this.from   = BigInt(tempData.from);
            this.to     = BigInt(tempData.to);

            return true;
        }
        catch(e){
            return false;
        }

    }

    __cls.prototype.toTaskData = function(){
        if(this.number && this.from && this.to){
                
            return new MersenneTask({
                number : this.number,
                from : this.from,
                to : this.to
            });

        }
        
        return null;
    }

    return __cls;
})()

const MersenneTask = (function(){
    function __cls({number,from,to}){

        this.number = number;
        this.from = from;
        this.to = to;

        this.now = this.number;
        this.primeCount = 0;

    }


    return __cls;
})();