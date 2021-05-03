const Sprite = (function(){
    function __Sprite(args){
        this.x = args.x || 0;
        this.y = args.y || 0;

        this.xSize = args.xSize || 10;
        this.ySize = args.ySize || 10;
        this.angle =  args.angle || 0;

        this.direction = args.direction || 0;
        this.images = args.images || [];
        this.imagesCount = 0;
    }

    __Sprite.prototype.getX = function(){
        return this.x;
    }

    __Sprite.prototype.getY = function(){
        return this.y;
    }

    __Sprite.prototype.getAngle = function(){
        return this.angle;
    }
    
    __Sprite.prototype.getXSize = function(){
        return this.xSize;
    }
    
    __Sprite.prototype.getYSize = function(){
        return this.ySize;
    }

    __Sprite.prototype.getImages = function(){
        return this.images;
    }


    __Sprite.prototype.setX = function(x){
        this.x = x;
    }

    __Sprite.prototype.setY = function(y){
        this.y = y;
    }

    __Sprite.prototype.setAngle = function(angle){
        this.angle = angle;
    }


    __Sprite.prototype.setXSize = function(xSize){
        this.xSize = xSize;
    }
    
    __Sprite.prototype.setYSize = function(ySize){
        this.ySize = ySize;
    }

    __Sprite.prototype.setImages = function(images){
        return this.images;
    }

    
    
    __Sprite.prototype.draw = function(ctx){
        //ctx draw
        ctx.save();
        ctx.translate(this.x,this.y);

        ctx.rotate(this.angle*Math.PI/180);

        ctx.translate(-this.x, -this.y)
        let index = (++this.imagesCount) % this.images.length
        ctx.drawImage(this.images[index],0,0,this.images[index].width,this.images[index].height,this.x - this.xSize/2,this.y - this.ySize/2,this.xSize,this.ySize);
        ctx.restore();
    }

    return __Sprite;
})()