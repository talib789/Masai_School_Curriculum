
import mongoose from 'mongoose'

const commentSchema = new mongoose.Schema({ 
    content: String,

    post: {
        type: mongoose.Types.ObjectId,
        ref: 'Post', 
    },

   
    user: {
        _id: mongoose.Types.ObjectId,
        name: String,
        image: String,
    },
}, {
    timestamps: true 
});

const commentModel = mongoose.model('Comment', commentSchema, 'comments')

export default commentModel;