const express=require('express')


const bookRouter=require('./routes/books.routes')
const {loggerMiddleware}=require('./middleware/logger')

const app=express()
const PORT =8000;

//IN MEMORY DATABSE 
//shifted to db folder

//Middle wares(Plugins)
app.use(express.json())
app.use(loggerMiddleware)

// app.use (function (req,res,next) {
//     const log = `\n[${Date.now()}] ${req.method} ${req.path}`;
//     fs.appendFileSync('logs.txt',log, 'utf-8')
//     next()
// })

// app.use(function(req,res,next){
//     console.log('I am ia middle ware ');
//    // return res.json({message:"Boom i am a fucking middle ware "})
//    next();
// })

// app.use(function(req,res,next){
//     console.log('I am middle ware B ')
//     next();
// })



//Routes
app.use('/books',bookRouter)


app.listen(PORT,() => console.log("Http server is listening on port 8000"))