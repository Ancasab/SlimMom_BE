// {
//   "_id": {
//     "$oid": "5d51694802b2373622ff555c"
//   },
//   "categories": "cereals",
//   "weight": 100,
//   "title": "Buckwheat (unground) green",
//   "calories": 296,
//   "groupBloodNotAllowed": [
//     null,
//     true,
//     false,
//     true,
//     true
//   ],
//   "__v": 0
// }


const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  categories: {
    type: String, // Corectat: String
    required: [true, "categories is required"],
  },
  weight: {
    type: Number,
    required: [true, "weight is required"],
  },
  title: {
    type: String, // Corectat: String
    required: [true, "title is required"],
  },
  calories: {
    type: Number,
    required: [true, "calories is required"],
  },
  groupBloodNotAllowed: {
    type: [Schema.Types.Mixed], // Array de valori mixte(boolean, null)
    required: [true, "groupBloodNotAllowed is required"],
  },
});

const Product = model("product", productSchema);

module.exports = Product;

// const { Schema, model } = require("mongoose");

// const productSchema = new Schema({
//   categories: {
//     type: Object,
//     required: [true, "categories is required"],
//   },
//   weight: {
//     type: Number,
//     required: [true, "weight is required"],
//   },
//   title: {
//     type: Object,
//     required: [true, "title is required"],
//   },
//   calories: {
//     type: Number,
//     required: [true, "calories is required"],
//   },
//   groupBloodNotAllowed: {
//     type: Array,
//     required: [true, "groupBloodNotAllowed is required"],
//   },
// });

// const Product = model("product", productSchema);

// module.exports = Product;
