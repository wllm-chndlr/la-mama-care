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
    title: "Numero Uno",
    price: 35,
    image:
      "https://static1.squarespace.com/static/54db69bee4b077d4135989e7/t/550ea069e4b06e8da2ef9e76/1427021940292/",
    description: "Our tried-and-true. Get new mama what she wants.",
    quantity: 20,
    date: new Date(Date.now())
  },
  {
    title: "Austin Native",
    price: 45,
    image:
      "https://static1.squarespace.com/static/54db69bee4b077d4135989e7/t/550ea069e4b06e8da2ef9e76/1427021940292/",
    description: "A curated selection of local Austin goodies.",
    quantity: 13,
    date: new Date(Date.now())
  },
  {
    title: "Pamper Perfect",
    price: 50,
    image:
      "https://static1.squarespace.com/static/54db69bee4b077d4135989e7/t/550ea069e4b06e8da2ef9e76/1427021940292/",
    description: "When straight-up pampering is the only option.",
    quantity: 9,
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
