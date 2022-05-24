const mongoose = require("mongoose");
const AutoIncrement = require("mongoose-sequence")(mongoose);
const contentsSchema = new mongoose.Schema({

    seq: {
        type: Number,
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

    contentsSchema.plugin(AutoIncrement, { inc_field: "seq" });

    module.exports = mongoose.model("Contents", contentsSchema);