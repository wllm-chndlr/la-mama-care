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
    itemID: 1,
    title: "Numero Uno",
    price: 35,
    image:
      "https://static1.squarespace.com/static/54db69bee4b077d4135989e7/t/550ea069e4b06e8da2ef9e76/1427021940292/",
    description: "Our tried-and-true. Get new mama what she wants.",
    quantity: 20,
    date: new Date(Date.now())
  },
  {
    itemID: 2,
    title: "Austin Native",
    price: 45,
    image:
      "https://static1.squarespace.com/static/54db69bee4b077d4135989e7/t/550ea069e4b06e8da2ef9e76/1427021940292/",
    description: "A curated selection of local Austin goodies.",
    quantity: 13,
    date: new Date(Date.now())
  },
  {
    itemID: 3,
    title: "Pamper Perfect",
    price: 50,
    image:
      "https://static1.squarespace.com/static/54db69bee4b077d4135989e7/t/550ea069e4b06e8da2ef9e76/1427021940292/",
    description: "When straight-up pampering is the only option.",
    quantity: 9,
    date: new Date(Date.now())
  }
];

const itemSeed = [
  {
    itemID: 1,
    title: "Nipple Butter",
    image: "../client/src/images/items/nipple_cream.jpg",
    description:
      "Nursing your baby can be an incredible bonding experience, but it can leave you with less comforting physical symptoms. Motherlove Nipple Cream is an herbal salve that helps soothe sore, cracked nipples after feedings. It’s made with 100% certified organic ingredients (and no vitamin E) that are safe to ingest so it won’t harm you or your baby.",
    quantity: 1,
    date: new Date(Date.now())
  },
  {
    itemID: 2,
    title: "Almonds",
    image:
      "https://www.riteaid.com/shop/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/0/4/041570003831.jpg",
    description: "Delicious nuts.",
    quantity: 1,
    date: new Date(Date.now())
  },
  {
    itemID: 3,
    title: "Hydro Flask 32 oz Wide Mouth w/ Straw Lid",
    image: "../client/src/images/items/hydroflask.jpg",
    description:
      "Sip your way through all-day adventures. Big enough for a whole day on the river or trails, our 32 oz Wide Mouth Bottle is made with professional-grade stainless steel and a wider opening for faster fill.",
    quantity: 1,
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

db.Item
  .remove({})
  .then(() => db.Item.collection.insertMany(itemSeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });