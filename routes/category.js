const express=require("express")
const router=express.Router()
const categoryController=require("../controllers/category")
  router.post('/add', categoryController.addcategory)
  module.exports=router