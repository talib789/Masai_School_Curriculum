const express = require('express')
const connectDatabase = require('./Database')
const blogsRouter = require('./Routes/blogs')
const userRouter = require('./Routes/user')

const app = express()

app.use(express.json())

app.use(blogsRouter)
app.use(userRouter)

connectDatabase().then(() => {
    app.listen(3008, () => {
        console.log("Server is listening at http://localhost:3008")
    })
})