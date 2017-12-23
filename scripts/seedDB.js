const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Box collection and inserts the boxes below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/laMamaCare",
  {
    useMongoClient: true
  }
);

const boxSeed = [
  {
    title: "The Numero Uno",
    price: 35,
    description: "Our tried-and-true. Get new mama what she wants.",
    date: new Date(Date.now())
  },
  {
    title: "Austin Native",
    price: 45,
    description: "A curated selection of local Austin goodies.",
    date: new Date(Date.now())
  },
  {
    title: "Pamper Perfect",
    price: 50,
    description: "When straight-up pampering is the only option.",
    date: new Date(Date.now())
  }
];

db.Box
  .remove({})
  .then(() => db.Box.collection.insertMany(boxSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
