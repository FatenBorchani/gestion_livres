const express=require("express")
const router=express.Router()
const bookController=require("../controllers/book")
//const book=require("../middlewares/book")
  router.get('/author/:author',bookController.getlivre )
  router.post('/add', bookController.postlivre)
  router.patch('/id/:id', bookController.patchlivre)
  router.delete('/id/:id', bookController.deletelivre)
  module.exports=router