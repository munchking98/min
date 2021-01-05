const mongoose = require('mongoose');

const { Schema } = mongoose;
const hellSchema = new Schema({
  moleNumber: {
    type: Number,
    required: true,
  },
  respawnTime: {
    type: String,
    required: true,
  },
  date: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model('Hell', hellSchema);
