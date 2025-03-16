// {
//   "_id": {
//     "$oid": "67d13da62c91ea0df7435d75"
//   },
//   "name": "Petra",
//   "email": "petra.marin@yahoo.com",
//   "password": "$2b$10$rRrsktxFFefN8l3fuBhL9OQPvDpBlZKvHkmw6rX/HihMukLQAgs7q",
//   "height": 173,
//   "age": 30,
//   "currentWeight": 68,
//   "desiredWeight": 65,
//   "bloodType": 2,
//   "dailyRate": 1420,
//   "notRecFood": [
//     "Cheese Paladin Mozzarella",
//     "Bread sticks Manifesto with rye taste",
//     ......
//     "lamb",
//     "Lamb (square)"
//   ],
//   "createdAt": {
//     "$date": "2025-03-12T07:54:14.869Z"
//   },
//   "updatedAt": {
//     "$date": "2025-03-13T09:06:07.866Z"
//   },
//   "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjY3ZDEzZGE2MmM5MWVhMGRmNzQzNWQ3NSIsImlhdCI6MTc0MTg1Njc2NywiZXhwIjoxNzQxODYwMzY3fQ.HDTPwbHQt2lhCBcSVUdl80NvDGY-xOAMS9xkLmSlk50"
// }

const { Schema, model } = require("mongoose");

const userSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Set password for user"],
    },
    token: String,
    height: {
      type: Number,
      min: 50,
      max: 250,
      default: null,
    },
    age: {
      type: Number,
      min: 1,
      max: 100,
      default: null,
    },
    currentWeight: {
      type: Number,
      min: 5,
      max: 250,
      default: null,
    },
    desiredWeight: {
      type: Number,
      min: 5,
      max: 250,
      default: null,
    },
    bloodType: {
      type: Number,
      enum: [1, 2, 3, 4],
      default: 1,
    },
    dailyRate: {
      type: Number,
      default: null,
    },
    notRecFood: {
      type: [String],
      default: [],
    },
  },
  { versionKey: false, timestamps: true }
);

const User = model("user", userSchema);

module.exports = User;
