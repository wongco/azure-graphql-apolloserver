const result = require('dotenv').config();

if (result.error) {
  throw result.error;
}

let MONGODB_URI = process.env.MONGODB_URI;
let MONGODB_URI2 = process.env.MONGODB_URI2;

module.exports = { MONGODB_URI, MONGODB_URI2 };
