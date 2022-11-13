const mongoose = require('mongoose');
const { schema } = require('../../../Auth App/back-end/server/database/user');
const Schema = mongoose.Schema;


const likeSchema = new Schema({
    _id: schema.Types.ObjectId,
    User_id: { type: mongoose.Types.ObjectId, ref: "users" },
    Blog_id: { type: mongoose.Types.ObjectId, ref: "Blogs" },
    Emoji: String
})

const Like = mongoose.Model("like", likeSchema)

module.exports = Like;