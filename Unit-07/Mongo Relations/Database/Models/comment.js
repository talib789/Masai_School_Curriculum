const mongoose = require('mongoose');
const { schema } = require('../../../Auth App/back-end/server/database/user');
const Schema = mongoose.Schema;


const commentSchema = new Schema({
    _id: schema.Types.ObjectId,
    Blog_id: { type: mongoose.Types.ObjectId, ref: 'Blogs' },
    User_id: { type: mongoose.Types.ObjectId, ref: "Users" },
    Message: String,
    Rating: String

})

const Comment = mongoose.Model("comment", commentSchema)

module.exports = Comment;