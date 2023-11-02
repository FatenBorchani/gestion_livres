const mongoose = require('mongoose');
const categorySchema = new mongoose.Schema({
  title: {
    type: String,
    enum: ["Horror", "Mystery", "Fantasy", "Drama", "Romance"],
    required: true
  }
});

module.exports = mongoose.model('Category', categorySchema);
