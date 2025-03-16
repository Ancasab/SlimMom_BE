// {
//   "_id": {
//     "$oid": "67d1773d7d4eda3a69b9b7ea"
//   },
//   "productName": "Apple",
//   "weight": 150,
//   "calories": 71,
//   "date": {
//     "$date": "2025-03-12T11:59:57.725Z"
//   },
//   "owner": {
//     "$oid": "67d174f2aa185d95a7ad5863"
//   }
// }

const { Schema, model } = require("mongoose");

const eatenProductSchema = new Schema(
  {
    productName: {
      type: String,
      required: [true, "productName is required"],
    },
    weight: {
      type: Number,
      required: [true, "weight is required"],
    },
    calories: {
      type: Number,
    },
    date: {
      type: Date,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "user",
    },
  },
  { versionKey: false }
);

const EatenProduct = model("eatenProduct", eatenProductSchema);

module.exports = EatenProduct;
