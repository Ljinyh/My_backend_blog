const mongoose = require("mongoose");

const contentsSchema = new mongoose.Schema({

    contentsId: {
        type: Number,
        required: true,
        unique: true,
      },

    UserId: {
      type: String,
      required: true,
      unique: true,
    },  

    detail:{
      type: String,
    },

    title: {
      type: String,
      },

    password: {
        type: String,
        required: true,
      },

      date : {
        type: Date, 
        default: new Date
      }
    });
    
    module.exports = mongoose.model("Contents", contentsSchema);