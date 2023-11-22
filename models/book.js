const mongoose = require('mongoose');
const { Schema } = mongoose;

const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author', // Remplacez 'Author' par le modèle approprié si nécessaire
    required: true
  },
  category: [{
    type: Schema.Types.ObjectId,
    ref: "Category",
    required: true
  }],
  year: {
    type: Number,
    required: true
  }
});

bookSchema.statics.findByAuthor = function(authorId) {
  return this.find({ author: authorId }).exec();
};

module.exports = mongoose.model('Book', bookSchema);



