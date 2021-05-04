/*저는 바보에오
어떻게 하는지 아무고토 몰라오
그러니 잘못하고 있다면
그냥 와서 말해줘오
짲응내도 댐afdasfaafasfdasfdsasfd
어머나 세상에.
처음부터 끝까지 잘못했다는 정설
*/
const MersennePrime = require("./server-side/modules/utils/MersennePrime")

const express = require("express");
const http       = require("http");
const websocket  = require("ws");

const bodyParser = require("body-parser");
const session = require("express-session");


const expressRouter = express.Router();
const app                  = express();

app.set('views', __dirname + '/client-side/html/');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);


app.use(express.static("./client-side"));
app.use(session({
 secret: '@#@$MYSIGN#@$#$',
 resave: false,
 saveUninitialized: true
}));

app.get('/',function(req,res){
    console.log(req.session.workerId);
    if(req.session.workerId){

    }
    else{
        req.session.workerId = MersennePrime.createWorkerId();

    }
    res.render("mersenne/mersennePage.html")
});
const server = http.createServer(app);

const wss = require("./server-side/routers/websocket")(server);

server.listen(8080)


console.log("server open port : 8080")

