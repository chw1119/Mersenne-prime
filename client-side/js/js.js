window.onload = function() {

    let canvas = document.getElementById('canvas-background');
    let ctx = canvas.getContext('2d');

    class DrawGraph {
        static sin(date,vertexCount,ratio,height,startHeight){
            const temp = [];
            const width = window.innerWidth / vertexCount;
            
            for(let a = 0; a<vertexCount; a++) {
                temp[a] = {x : width * (a + 1), y : Math.sin(date + width * (a + 1) / ratio) * height / 2 + startHeight};
            }

            
            ctx.beginPath();
            ctx.moveTo(0, Math.sin(date) * height / 2 + startHeight);

            for(let a = 0; a<vertexCount; a++) {
                
                ctx.lineTo(temp[a].x, temp[a].y);
            }
            
            ctx.lineTo(window.innerWidth,window.innerHeight);
            ctx.lineTo(0,window.innerHeight);
            ctx.lineTo(0, Math.sin(date));
            ctx.closePath();
            ctx.fill();
        }


        static rnad(date,vertexCount,ratio,height,startHeight){
            const temp = [];
            const width = window.innerWidth / vertexCount;
            
            for(let a = 0; a<vertexCount; a++) {
                temp[a] = {x : width * (a + 1), y : Math.sin(date + width * (a + 1) / ratio) * height / 2 + startHeight};
            }

            
            ctx.beginPath();
            ctx.moveTo(0, Math.sin(date) * height / 2 + startHeight);

            for(let a = 0; a<vertexCount; a++) {
                
                ctx.lineTo(temp[a].x, temp[a].y);
            }
            
            ctx.lineTo(window.innerWidth,window.innerHeight);
            ctx.lineTo(0,window.innerHeight);
            ctx.lineTo(0, Math.sin(date));
            ctx.closePath();
            ctx.fill();
        }

        //static angleTo
    }

    setInterval(()=>{
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
        
        ctx.clearRect(0,0,window.innerWidth,window.innerHeight);
        
        ctx.fillStyle = "rgb(19, 0, 71)";
        ctx.fillRect(0,0,window.innerWidth,window.innerHeight);

        ctx.fillStyle = "rgb(39, 0, 89)";
        DrawGraph.sin(Date.now() / 50000 + 10 , 10 , 500 , window.innerHeight/6 , window.innerHeight/6.3);


        ctx.fillStyle = "rgb(52, 26, 145)";
        DrawGraph.sin(Date.now() / 4000 + 25 , 10 , 500 , window.innerHeight/6 , window.innerHeight/4.2);


        ctx.fillStyle = "rgb(45, 55, 171)";
        DrawGraph.sin(Date.now() / 3000 + 40 , 10 , 500 , window.innerHeight/6 , window.innerHeight/2.7);

        
        ctx.fillStyle = "rgb(73, 99, 219)";
        DrawGraph.sin(Date.now() / 2000 + 55 , 10 , 500 , window.innerHeight/6 , window.innerHeight/1.8);

        
        ctx.fillStyle = "rgb(89, 119, 254)";
        DrawGraph.sin(Date.now() / 1000 + 70 , 10 , 500 , window.innerHeight/6 , window.innerHeight/1.2);


    },1000/30)
};