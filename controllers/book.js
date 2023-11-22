const Book = require('../models/book');

const getlivre= (req, res) => {
  const authorId = req.params.id;

  Book.findByAuthor(authorId)
    .then(books => {
      if (books.length > 0) {
        res.status(200).json({
          books: books,
          message: 'Livres trouvés pour cet auteur!'
        });
      } else {
        res.status(404).json({
          message: 'Aucun livre trouvé pour cet auteur!'
        });
      }
    })
    .catch(error => {
      res.status(500).json({
        error: error.message,
        message: 'Erreur lors de la recherche des livres pour cet auteur'
      });
    });
};



  const postlivre=(req, res) => {
    const newBook = new Book(req.body);
    newBook.save()
      .then(() => {
        res.status(201).json({
          model: newBook,
          _id:req.body.id,
          
          message: 'Livre créé!',
        });
      })
      .catch(error => {
        res.status(400).json({
          error: error.message,
          message: 'Données invalides',
        });
      });
  };
  const patchlivre=(req, res) => {
    Book.findByIdAndUpdate({_id:req.params.id}, req.body, { new: true })
      .then(book => {
        if (!book) {
          res.status(404).json({
            message: 'Livre non trouvé!',
          });
        } else {
          res.status(200).json({
            model: book,
            message: 'Livre modifié!',
          });
        }
      })
      .catch(error => {
        res.status(400).json({
          error: error.message,
          message: 'Problème de mise à jour du livre',
        });
      });
  };
  const deletelivre=(req, res) => {
    Book.findByIdAndRemove({_id:req.params.id})
      .then(book => {
        if (!book) {
          res.status(404).json({
            message: 'Livre non trouvé!',
          });
        } else {
          res.status(200).json({
            message: 'Livre supprimé avec succès!',
          });
        }
      })
      .catch(error => {
        res.status(400).json({
          error: error.message,
          message: 'Problème de suppression du livre',
        });
      });
  };
  const createBook = async (req, res) => {
    try {
      const { title, author, category, year } = req.body;
  
      // Vérifier si l'auteur a déjà des livres enregistrés
      const existingBooks = await Book.findByAuthor(author);
      if (existingBooks.length > 0) {
        return res.status(400).json({ message: 'L\'auteur a déjà des livres enregistrés.' });
      }
  
      const newBook = new Book({ title, author, category, year });
      await newBook.save();
      res.status(201).json({ message: 'Nouveau livre créé avec succès !' });
    } catch (error) {
      res.status(400).json({ error: error.message, message: 'Données invalides' });
    }
  };
  
 
  
  

  module.exports={
    getlivre:getlivre,
    postlivre:postlivre,
    patchlivre:patchlivre,
    deletelivre:deletelivre,
    createBook:createBook,
}
