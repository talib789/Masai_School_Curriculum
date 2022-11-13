const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
    _id: Schema.Types.ObjectId,
    name: String,
    email: String,
    social_profile: {
        linkedIn: String,
        facebook: String,
        twitter: String,
        github: String,
        instagram: String,
    },
    addresses: [
        {
            line1: String,
            city: String,
            state: String,
            pincode: Number,
        }
    ],
    blogs_id: [{ type: mongoose.Types.ObjectId, ref: 'Blogs' }]
})

const User = mongoose.Model("user", userSchema)

module.exports = User;