const mongoose = require ('mongoose')

const blogsSchema = new mongoose.Schema({
    title:{
        type:String,
        required: true
    },
    Category:{
        type:String,
        required:true
    },
    Author:{
        type:String,
        required:true
    },
    Content:{
        type:String,
        required:true
    }
})

const Blog = mongoose.model('Blog',blogsSchema)

module.exports = Blog

