const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Box collection and inserts the boxes below

mongoose.connect(
  process.env.MONGODB_URI ||
    "mongodb://heroku_p0rlm2v7:1r6d8l6uft7saf4fmr5t1a6fn8@ds125048.mlab.com:25048/heroku_p0rlm2v7",

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
    title: "Nipple Cream",
    image:
      // "https://www.mommygear.com/media/motherlove/ss_size1/motherlove-nipple-cream.jpg",
      "https://github.com/wllm-chndlr/la-mama-care/blob/master/client/src/images/items/cream.jpg?raw=true",
    description:
      "Nursing your baby can be an incredible bonding experience, but it can leave you with less comforting physical symptoms. Motherlove Nipple Cream is an herbal salve that helps soothe sore, cracked nipples after feedings. It’s made with 100% certified organic ingredients (and no vitamin E) that are safe to ingest so it won’t harm you or your baby.",
    quantity: 1,
    date: new Date(Date.now())
  },
  {
    itemID: 2,
    title: "Pumpkin Seeds",
    image:
      // "https://cdn3.bigcommerce.com/s-5yyhpm/products/1569/images/1319/Pumpkin_K__23885.1444985725.480.480.jpg?c=2",
      "https://github.com/wllm-chndlr/la-mama-care/blob/master/client/src/images/items/seeds.jpg?raw=true",
    description:
      "Affectionately known as “pepitas,” the little green kernel inside the big white shell of the pumpkin seed is a favorite snack because of its taste . . . or WAIT, is it because of its health benefits?",
    quantity: 1,
    date: new Date(Date.now())
  },
  {
    itemID: 3,
    title: "Lavender Lip Saver",
    image:
      // "https://img.etsystatic.com/il/34cfc1/1051445092/il_570xN.1051445092_1945.jpg",
      "https://github.com/wllm-chndlr/la-mama-care/blob/master/client/src/images/items/lip-saver.jpg?raw=true",
    description:
      "Our nourishing Lip Saver protects your lips from the elements using wildcrafted Lavender and unrefined Beeswax. No petrochemicals, artificial flavors or fragrances.",
    quantity: 1,
    date: new Date(Date.now())
  },
  {
    itemID: 4,
    title: "Water bottle",
    image: 
      // "https://media.asicdn.com/images/jpgo/22590000/22596373.jpg",
      "https://github.com/wllm-chndlr/la-mama-care/blob/master/client/src/images/items/water.jpg?raw=true",
    description:
      'This frosted clear tumbler features double wall construction for insulation of hot or cold liquids. It comes with a snap-on, spill-resistant flip top lid and a 13" flexi straw with a tethered cap.',
    quantity: 1,
    date: new Date(Date.now())
  },
  {
    itemID: 5,
    title: "Hand sanitizer",
    image:
      // "https://static1.squarespace.com/static/545a7d88e4b04f070d4b2270/t/578383b120099e05b58f3f7b/1468236724044/download.png?format=500w",
      "https://github.com/wllm-chndlr/la-mama-care/blob/master/client/src/images/items/sanitizer.jpeg?raw=true",
    description:
      "Kills the most germs1 – Just 1 squirt of PURELL Advanced Hand Sanitizer kills as many germs as 2 squirts of any other national brand.",
    quantity: 1,
    date: new Date(Date.now())
  },
  {
    itemID: 6,
    title: "Pashmina",
    image:
      // "https://ii.worldmarket.com/fcgi-bin/iipsrv.fcgi?FIF=/images/worldmarket/source/12961_XXX_v1.tif&wid=2000&cvt=jpeg",
      "https://github.com/wllm-chndlr/la-mama-care/blob/master/client/src/images/items/pashmina.jpg?raw=true",
    description:
      "Our soft pashmina-style shawl is perfectly sized to do double-duty as a scarf or shawl.",
    quantity: 1,
    date: new Date(Date.now())
  },
  {
    itemID: 7,
    title: "Food Bars",
    image:
      // "https://cdn.shopify.com/s/files/1/1077/6418/products/thunderbird.png?v=1504130332",
      "https://github.com/wllm-chndlr/la-mama-care/blob/master/client/src/images/items/bars.png?raw=true",
    description:
      "Containing uniquely pure and highly powerful ingredients, Thunderbird bars provide consumers with conveniently packaged, nutrient dense, plant-based goodness.",
    quantity: 1,
    date: new Date(Date.now())
  },
  {
    itemID: 8,
    title: "Nursing Pads",
    image:
      // "https://images-na.ssl-images-amazon.com/images/I/81kaxtmQxaL._SL1500_.jpg",
      "https://github.com/wllm-chndlr/la-mama-care/blob/master/client/src/images/items/pads.jpg?raw=true",
    description:
      "5 layers of soft, absorbent fabric made with 100% organic cotton.",
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