const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const blogSchema = new Schema({
    _id: Schema.Types.ObjectId,
    title: String,
    body: String,
    category_ids: [{ type: mongoose.Types.ObjectId, ref: 'Categories' }]
})

const Blog = mongoose.Model("blog", blogSchema)

module.exports = Blog;
