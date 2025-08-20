const express = require('express')
const {BOOKS}=require('../db/book')

const router=express.Router()

router.get('/',(req,res)=> {
   // res.setHeaders('x-py','piyush')  //if a custom header start it with x
    res.json(BOOKS)  //sends in json format
});

router.get('/:id',(req,res)=> {
    const id=req.params.id;
    if(isNaN(id))
        return res.status(400).json({error:`    ID must be a number nigga `})
    const book=BOOKS.find((e)=> e.id==id);//Its like select * fro  id
   if (!book) 
    return res
    .status(404)
    .json({error: `Book with id ${id} does not exist`});
    return res.json(book)
})

router.post('/',(req,res)=> {
    const{title,author}=req.body;

    if(!title||title==='') 
    return res.status(400).json({error:'Title is requested'})

     if(!author||author==='') 
    return res.status(400).json({error:'Title is requested'})
   
     const id =BOOKS.length+1
     const book={id,title,author}
     BOOKS.push(book);

    return res.status(201).json({message:"Book created sucessfully "})
})

router.delete('/:id',(req,res)=> {
    const id =parseInt(req.params.id);
    if(isNaN(id))
    return res.status(400).json({error:`    ID must be a number nigga `})

    const indexToDelete = BOOKS.findIndex((e) => e.id==id)

    if(indexToDelete<0) 
        return res
    .status(404)
    .json({error:`Book with id ${id} does not exist` })
    
    BOOKS.splice(indexToDelete,1);

    return res.status(200).json({message:"bOOks deleted "})
})

module.exports=router;