const express = require('express')
 const oontroller =require("../controllers/book.controller") 

const router=express.Router()

//router.get('/',(req,res)=> {
   // res.setHeaders('x-py','piyush')  //if a custom header start it with x
    //res.json(BOOKS)  //sends in json format
//});
router.get("/",controller.getAllBooks);

router.get('/:id',controller.getBookById);

router.post('/',controller.createBook);

router.delete('/:id',controller.deleteBookById);

module.exports=router;