const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const boxSchema = new Schema({
  title: { type: String, required: true },
  price: { type: Number, required: true },
  date: { type: Date, default: Date.now }
});

const Box = mongoose.model("Box", boxSchema);

module.exports = Box;
