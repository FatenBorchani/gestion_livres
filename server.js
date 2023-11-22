const express = require('express');
const port = 4000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const BookRoutes= require("./routes/book")
const AuthorRoutes= require("./routes/author")
const CategoryRoutes= require("./routes/category")
const AuthRoutes=require("./routes/auth")
const EventRoutes=require("./routes/event")
const app = express();


mongoose.connect("mongodb://localhost:27017/Back",
{ useNewUrlParser : true,useUnifiedTopology : true })
.then(()=> console.log("Connexion a  MongoDB reussie!"))
.catch((e)=>console.log("Connexion à MongoDB echouée!",e))

app.use(bodyParser.json());
app.use("/books",BookRoutes);
app.use("/authors",AuthorRoutes);
app.use("/category",CategoryRoutes);
app.use("/auth",AuthRoutes);
app.use("/event",EventRoutes)
app.listen(port, () => {
  console.log("Server is running on port" +" " +port);
});
module.exports=app
