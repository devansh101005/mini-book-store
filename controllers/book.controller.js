const {BOOKS} =require("../models/book")

exports.getAllBooks = function(req,res){
    res.json(BOOKS)
}

exports.getAllBooks=function(req,res){

    const id=req.params.id;
    if(isNaN(id))
        return res.status(400).json({error:`    ID must be a number nigga `})
    const book=BOOKS.find((e)=> e.id==id);//Its like select * fro  id
   if (!book) 
    return res
    .status(404)
    .json({error: `Book with id ${id} does not exist`});
    return res.json(BOOKS);
};

exports.createBook=function(req,res){
const{title,author}=req.body;

    if(!title||title==='') 
    return res.status(400).json({error:'Title is requested'})

     if(!author||author==='') 
    return res.status(400).json({error:'Title is requested'})
   
     const id =BOOKS.length+1
     const book={id,title,author}
     BOOKS.push(book);

    return res.status(201).json({message:"Book created sucessfully "})


}

exports.deleteBookById =function(req,res){


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

}

