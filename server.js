const express = require('express');
const port = 4000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const BookRoutes= require("./routes/book")
const AuthorRoutes= require("./routes/author")
const CategoryRoutes= require("./routes/category")
const app = express();


mongoose.connect("mongodb://localhost:27017/Back",
{ useNewUrlParser : true,useUnifiedTopology : true })
.then(()=> console.log("Connexion a  MongoDB reussie!"))
.catch((e)=>console.log("Connexion à MongoDB echouée!",e))

app.use(bodyParser.json());
app.use("/books",BookRoutes);
app.use("/authors",AuthorRoutes);
app.use("/category",CategoryRoutes);
app.listen(port, () => {
  console.log("Server is running on port" +" " +port);
});
module.exports=app
//.await .then
/*
app.get('/books/title/:title', async (req, res) => {
  try {
    const title = req.params.title;
    const book = await Book.findOne({ title });
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
  } catch (err) {
    res.status(400).json({
      error: err.message,
      message: 'Données invalides!'
    });
  }
});

app.post('/books', async (req, res) => {
  try {
    const newBook = new Book(req.body);
    await newBook.save();
    res.status(201).json({
      model: newBook,
      message: 'Livre créé!',
    });
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: 'Données invalides',
    });
  }
});

app.patch('/books/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndUpdate(req.params.id, req.body, { new: true });
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
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: 'Problème de mise à jour du livre',
    });
  }
});

app.delete('/books/:id', async (req, res) => {
  try {
    const book = await Book.findByIdAndRemove(req.params.id);
    if (!book) {
      res.status(404).json({
        message: 'Livre non trouvé!',
      });
    } else {
      res.status(200).json({
        message: 'Livre supprimé avec succès!',
      });
    }
  } catch (error) {
    res.status(400).json({
      error: error.message,
      message: 'Problème de suppression du livre',
    });
  }
});

app.listen(port, () => {
  console.log("Server is running on port " + port);
});*/

