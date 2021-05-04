const PrimeCollector = (function(){
    function __cls(poolSize,connection){
        this.taskPool = [];
        this.poolSize = poolSize || 10;
        this.connection = connection || new Connection();
    }

    __cls.prototype.collectPrime = function(){
        if(this.taskPool.length){
            const temp = this.taskPool.shift();

            for(let a = temp.from; a<temp.to; a += 2n){
                if(!(temp.number % a)){
                    temp.count++;

                    if(temp.count > 2){
                        
                    }
                }
            }

        }
    }

    __cls.prototype.pushTask = function(task){
        
        if(this.taskPool.length < this.poolSize){
            return this.taskPool.push(task);
        }

        return false;
    }

    return __cls;
})();