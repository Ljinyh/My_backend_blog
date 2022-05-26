const express = require("express");
const connect = require("./schemas");
const bodyParser = require('body-parser')
const app = express();
const port = 3000;

connect();

const contentsRouter = require("./routes/contents");

app.use(express.static("static"));
app.use(bodyParser.urlencoded({extended:false}))

const requestMiddleware = (req,res,next)=>{
    console.log("Request URL:", req.originalUrl, " - ", new Date());
    next();
};

app.use(express.urlencoded());
app.use(express.json());
app.use(requestMiddleware);

app.use("/api", [contentsRouter]);

app.post("/contents", (req,res)=>{
    res.render(__dirname + '/index.html')
});

app.get("/contents",(req, res) => {
    res.render(__dirname + '/index.html')
});

app.get("/contents/detail", (req,res) => {
    res.render(__dirname + '/detail.html')
});

app.listen(port, () => {
    console.log(port, "포트로 서버 On!");
});