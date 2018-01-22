const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boxSchema = new Schema({
  title: { 
    type: String, 
    required: true 
  },
  price: { 
    type: Number, 
    required: true 
  },
  image: { 
    type: String, 
    required: true 
  },
  description: { 
    type: String, 
    required: true 
  },
  quantity: { 
    type: Number, 
    required: false 
  },
  date: { 
    type: Date, 
    default: Date.now 
  }
});

const Box = mongoose.model("Box", boxSchema);

module.exports = Box;
