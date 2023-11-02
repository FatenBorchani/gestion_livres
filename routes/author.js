const express=require("express")
const router=express.Router()
const authorController=require("../controllers/author")
//const book=require("../middlewares/book")
  router.post('/add', authorController.addauthor)
  module.exports=router