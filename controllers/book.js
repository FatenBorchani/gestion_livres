const Book=require("../models/book")
const getlivre=(req, res) => {
    
    Book.findOne({ author:req.params.author })
    .populate("author")
    .populate("category")
      .then(book => {
        if (book) {
          res.status(200).json({
            model: book,
            message: 'Livre trouvé!'
          });
        } else {
          res.status(404).json({
            message: 'Livre non trouvé!'
          });
        }
      })
      .catch((err) => {
        res.status(400).json({
          error: err.message,
          message: 'Données invalides!'
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
  module.exports={
    getlivre:getlivre,
    postlivre:postlivre,
    patchlivre:patchlivre,
    deletelivre:deletelivre
}
