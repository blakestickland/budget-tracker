let mongoose = require("mongoose");
let db = require("../models");

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/budget", 
  {
    useNewUrlParser: true,
    useFindAndModify: false
  });

let budgetSeed = [
  {
    name: "Dinner",
    value: 90,
    date: new Date().setDate(new Date().getDate()-10)
    // day: new Date().setDate(new Date().getDate()-10),
  },
  {
    name: "Hotel",
    value: 390,
    date: new Date().setDate(new Date().getDate()-9)
    // day: new Date().setDate(new Date().getDate()-10),
  },
  {
    name: "Fun Park",
    value: 80,
    date: new Date().setDate(new Date().getDate()-8)
    // day: new Date().setDate(new Date().getDate()-10),
  },
  {
    name: "Present for birthday",
    value: 30,
    date: new Date().setDate(new Date().getDate()-7)
    // day: new Date().setDate(new Date().getDate()-10),
  },
  {
    name: "New shoes",
    value: 130,
    date: new Date().setDate(new Date().getDate()-6)
    // day: new Date().setDate(new Date().getDate()-10),
  },
];
  
db.Transaction.deleteMany({})
  .then(() => db.Transaction.collection.insertMany(budgetSeed))
  .then(data => {
    console.log(data.result.n + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });
