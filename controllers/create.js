const Book = require('../models/book');

const createBook = async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.validate(); // Validation du livre avec Mongoose

    // Vérifier si l'auteur a des anciens livres
    const existingBooks = await Book.findByAuthor(newBook.author);
    if (existingBooks.length === 0) {
      return res.status(400).json({ message: 'L\'auteur doit avoir écrit d\'autres livres avant de créer un nouveau livre.' });
    }

    // Si l'auteur a des anciens livres, sauvegarder le nouveau livre
    await newBook.save();
    res.status(201).json({ message: 'Nouveau livre créé avec succès !' });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createBook
};


