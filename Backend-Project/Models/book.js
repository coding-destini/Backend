const mongoose = require('mongoose')


//Book Schema
const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        required: true
    },
    author : {
        type : mongoose.Schema.Types.ObjectId,
        ref : 'Author',
        required : true
    }
}) 

const Book = mongoose.model('Book',bookSchema)

module.exports = Book