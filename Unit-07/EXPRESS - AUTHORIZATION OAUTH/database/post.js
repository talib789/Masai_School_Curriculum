
import mongoose from 'mongoose'

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    likedCount: Number,
   
    user: {
     
        _id: mongoose.Types.ObjectId,
        name: String,
        image: String,
        about: String,
        followerCount: Number,
    },
});

const postModel = mongoose.model('Post', postSchema, 'posts')

export default postModel;