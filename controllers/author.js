const Author=require("../models/author")
const addauthor=(req, res) => {
    const newAuthor = new Author(req.body);
    newAuthor.save()
      .then(() => {
        res.status(201).json({
          model: newAuthor,
          message: 'Auteur ajouté!',
        });
      })
      .catch(error => {
        res.status(400).json({
          error: error.message,
          message: 'Données invalides',
        });
      });
  };
  module.exports={
    addauthor:addauthor
}