const express=require("express")
const router=express.Router()
const bookController=require("../controllers/book")
//const book=require("../middlewares/book")
  router.get('/id/:id',bookController.getlivre )
  router.post('/add', bookController.postlivre)
  router.patch('/id/:id', bookController.patchlivre)
  router.delete('/id/:id', bookController.deletelivre)
  router.post('/create', bookController.createBook);
  module.exports=router