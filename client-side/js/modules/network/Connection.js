const Connection = (function(){
    function __cls({url}){
        this.connection = new WebSocket(url);
    }

    __cls.prototype.setOnMessage = function(func){
        if(this.connection){
            this.connection.onmessage = func;
        }
    }

    __cls.prototype.setOnOpen = function(func){
        if(this.connection){
            this.connection.onopen = func;
        }
    }

    return __cls;
})()

module.exports = Connection;