const mongoose = require("mongoose");
const connect = () =>{
    mongoose.connect("mongodb://13.125.252.152/my_backend_blog", {ignoreUndefined: true}).catch((err) => {
        console.error(err);
    });
};


module.exports = connect;