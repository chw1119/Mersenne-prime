/*저는 바보에오
어떻게 하는지 아무고토 몰라오
그러니 잘못하고 있다면
그냥 와서 말해줘오
짲응내도 댐
어머나 세상에.
처음부터 끝까지 잘못했다는 정설
*/
const express = require("express");
const http       = require("http");

const expressRouter = express.Router();
const app                  = express();

app.get('/',function(req,res){
    
    res.redirect('./html/main.html');
});


app.use(express.static("./client-side"));
http.createServer(app).listen(80);

