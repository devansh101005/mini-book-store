const express=require('express')

const app=express()
const PORT =8000;

//IN MEMORY DATABSE 
const books =[
    {id:1,title:'Book one ',author:'Author One'},
    {id:2,title:'Book one',author:'Author two'},
];

//Middle wares(Plugins)
app.use(express.json())

//Routes

app.get('/books',(req,res)=> {
   // res.setHeaders('x-py','piyush')  //if a custom header start it with x
    res.json(books)  //sends in json format
})

app.get('/books/:id',(req,res)=> {
    const id=req.params.id;
    if(isNaN(id))
        return res.status(400).json({error:`    ID must be a number nigga `})
    const book=books.find((e)=> e.id==id);//Its like select * fro  id
   if (!book) 
    return res
    .status(404)
    .json({error: `Book with id ${id} does not exist`});
    return res.json(book)
})

app.post('/books',(req,res)=> {
    const{title,author}=req.body;

    if(!title||title==='') 
    return res.status(400).json({error:'Title is requested'})

     if(!author||author==='') 
    return res.status(400).json({error:'Title is requested'})
   
     const id =books.length+1
     const book={id,title,author}
     books.push(book);

    return res.status(201).json({message:"Book created sucessfully "})
})

app.delete('/books/:id',(req,res)=> {
    const id =parseInt(req.params.id);
    if(isNaN(id))
    return res.status(400).json({error:`    ID must be a number nigga `})

    const indexToDelete = books.findIndex((e) => e.id==id)

    if(indexToDelete<0) 
        return res
    .status(404)
    .json({error:`Book with id ${id} does not exist` })
    
    books.splice(indexToDelete,1);

    return res.status(200).json({message:"bOOks deleted "})
})

app.listen(PORT,() => console.log("Http server is listening on port 8000"))