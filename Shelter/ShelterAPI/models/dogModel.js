var mongoose = require('mongoose');

var dogSchema = new mongoose.Schema(
  {
    breed: String,
    name: String,
    color: String,
    age: Number,
    previousHomes: Number,
    childSafe: Boolean,
  },
  {
    collection: 'dogs',
  },
);

module.exports = mongoose.model('dogModel', dogSchema);
