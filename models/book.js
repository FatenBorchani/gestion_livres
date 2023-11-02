const mongoose = require('mongoose');
const {Schema} = mongoose;
const bookSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  author: {
    type: Schema.Types.ObjectId,
    ref: 'Author', 
    required: true
    
  },
  category: [{
    type: Schema.Types.ObjectId,
    ref:"Category",
    required:true

  }],
  year: {
    type: Number,
    required: true
  }
});

module.exports = mongoose.model('Book', bookSchema);

