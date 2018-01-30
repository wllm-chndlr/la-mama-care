const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const itemSchema = new Schema({
  itemID: {
    type: Number,
    required: true
  },
  title: {
    type: String,
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

const Item = mongoose.model("Item", itemSchema);

module.exports = Item;
