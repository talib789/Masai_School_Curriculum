const mongoose = require('mongoose')

async function connectDatabase () {

    const dbUri = "mongodb://localhost:27017/blogs"

    try {
        await mongoose.connect(dbUri)
        console.log("database connected")
    } catch (err) {
        console.log("error in initating in database", err.message)
        throw err
    }

}

module.exports = connectDatabase
