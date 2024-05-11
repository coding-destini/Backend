const express = require('express')
const app = express()
const mongoose = require('mongoose')
const MongoDB_URL = 'mongodb+srv://akashshahngu:12345@books.kx4vwa6.mongodb.net/'
const Author = require('./Models/author')
const Book = require('./Models/book')

// connecting to DB
mongoose.connect(MongoDB_URL).then(()=>{
console.log("Connected to Database");
}).catch((err)=>{
console.log("Error in connection to DB");
})

//using JSON body parsing
app.use(express.json());

// Create a author 
app.post('/author',async (req,res)=>{
    try {
        const author = new Author(req.body);
        await author.save();
        res.status(201).json({
            message : "Author created Sucessfully",
            Author : author
        })
    } catch (error) {
        console.log("Error in creating author", error);
        res.status(400).json({
            err : error
        })
    }
})

//Create a Book 
app.post('/book',async(req,res)=>{
    try {
        const book  = new Book(req.body)
        await book.save()
        res.status(201).json({
            message : "Book created Sucessfully",
            Book : book
        })
        
    } catch (error) {
        console.log("Error in creating Book", error);
        res.status(400).json({
            err : error
        })
    }
})

// Get all author 
app.get('/getauthor',async(req,res)=>{
    try {
        const authors =  await Author.find();
        res.status(200).json({
            message : "All authors",
            Authors : authors  
        })
    } catch (error) {
        console.log("eror in getting Authors", error);
        res.status(400).json({
            err : error
        })
    }
})


// Get all books 
app.get('/getbooks',async(req,res)=>{
    try {
        const books =  await Book.find();
        res.status(200).json({
            message : "All Books",
            Books : books  
        })
    } catch (error) {
        console.log("eror in getting Books", error);
        res.status(400).json({
            err : error
        })
    }
})


//Author Edit (Update)
app.put('/author/:id',async(req,res)=>{
    try {

        const authorID = req.params.id;
        // console.log("Author ID ", authorID);
        const GetUdpatedAuthor = await Author.findByIdAndUpdate(
            authorID,
            req.body,
            {new : true}
        ); 
       if(GetUdpatedAuthor){
        res.status(200).json({
            message : "Author Udpate Successfully",
            UdpatedAuthor : GetUdpatedAuthor
        })
       }else{
        res.status(404).json("Unable to update auhor")
       }
        
    } catch (error) {
        console.log("eror in Updating author", error);
        res.status(400).json({
            err : error
        })
    }
}) 

// Delete Author
app.delete('/author/:id',async(req,res)=>{
try {
    const authorID = req.params.id
    const deletedAuthor = await Author.findByIdAndDelete(authorID)
    res.status(200).json({
        message:"author deleted sucessfully",
        Author : deletedAuthor
    })
} catch (error) {
    res.status(500).json({
        message : "Error in deleting author",
        err : error
    })
}
})




app.get('/',(req,res)=>{
    res.send("Hello Mongo DB with exprerss")
})

app.listen(8080,()=>{
    console.log("Server is started");
})