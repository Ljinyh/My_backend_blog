const express = require("express");
const connect = require("./schemas");
const app = express();
const port = 3000;

connect();

const contentsRouter = require("./routes/contents");

app.use(express.static("static"));

const requestMiddleware = (req,res,next)=>{
    console.log("Request URL:", req.originalUrl, " - ", new Date());
    next();
};

app.use(express.urlencoded());
app.use(express.json());
app.use(requestMiddleware);

app.use("/api", [contentsRouter]);

app.get("/",(req, res) => {
    res.send("Hello World");

});

app.listen(port, () => {
    console.log(port, "포트로 서버 On!");
});