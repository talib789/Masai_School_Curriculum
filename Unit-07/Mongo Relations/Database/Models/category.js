const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const categorySchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String
})

const Category = mongoose.Model("category", categorySchema)

module.exports = Category;