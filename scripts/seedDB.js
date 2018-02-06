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
    title: "Nipple Cream",
    image:
      "https://www.mommygear.com/media/motherlove/ss_size1/motherlove-nipple-cream.jpg",
    description:
      "Nursing your baby can be an incredible bonding experience, but it can leave you with less comforting physical symptoms. Motherlove Nipple Cream is an herbal salve that helps soothe sore, cracked nipples after feedings. It’s made with 100% certified organic ingredients (and no vitamin E) that are safe to ingest so it won’t harm you or your baby.",
    quantity: 1,
    date: new Date(Date.now())
  },
  {
    itemID: 2,
    title: "Deluxe Nut Mix",
    image:
      "https://cdn3.bigcommerce.com/s-5yyhpm/products/1436/images/1268/Deluxe__30997.1444985699.480.480.jpg?c=2",
    description:
      "Top of the line nuts makes for a top of the line snack, featuring Almonds (Blanched and Dry Roasted), Cashews, Macadamia nuts, Pecans, and Pistachio Kernels.",
    quantity: 1,
    date: new Date(Date.now())
  },
  {
    itemID: 3,
    title: "Lavender Lip Saver",
    image:
      "https://img.etsystatic.com/il/34cfc1/1051445092/il_570xN.1051445092_1945.jpg",
    description:
      "Our nourishing Lip Saver protects your lips from the elements using wildcrafted Lavender and unrefined Beeswax. No petrochemicals, artificial flavors or fragrances.",
    quantity: 1,
    date: new Date(Date.now())
  },
  {
    itemID: 4,
    title: "Double Wall Tumbler",
    image: "https://media.asicdn.com/images/jpgo/22590000/22596373.jpg",
    description:
      'This frosted clear tumbler features double wall construction for insulation of hot or cold liquids. It comes with a snap-on, spill-resistant flip top lid and a 13" flexi straw with a tethered cap.',
    quantity: 1,
    date: new Date(Date.now())
  },
  {
    itemID: 5,
    title: "Dried Apricots",
    image:
      "https://cdn3.bigcommerce.com/s-5yyhpm/products/1507/images/1307/Dry_Apricot__71909.1444985718.480.480.jpg?c=2",
    description:
      "Turkish Apricots provide you with Calcium, Iron, Vitamins A and C. They are a great to eat alone or cut up and put into salads or trail mixes.",
    quantity: 1,
    date: new Date(Date.now())
  },
  {
    itemID: 6,
    title: "Hair Ties",
    image:
      "https://catalog.staceyschoice.com/wp-content/uploads/2017/04/DPO-0026-Neutrals-e1491326071419.jpg",
    description:
      "Stacey’s Choice has been offering quality hair accessories since 1987.",
    quantity: 1,
    date: new Date(Date.now())
  },
  {
    itemID: 7,
    title: "Food Bars",
    image:
      "https://cdn.shopify.com/s/files/1/1077/6418/products/thunderbird.png?v=1504130332",
    description:
      "Containing uniquely pure and highly powerful ingredients, Thunderbird bars provide consumers with conveniently packaged, nutrient dense, plant-based goodness.",
    quantity: 1,
    date: new Date(Date.now())
  },
  {
    itemID: 8,
    title: "Nursing Pads",
    image:
      "https://images-na.ssl-images-amazon.com/images/I/81kaxtmQxaL._SL1500_.jpg",
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