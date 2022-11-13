const express = require("express");
const fs = require("fs");
const app = express();
app.use(express.json());

const validator = (req, res, next) => {
    let { id, title, content, author } = req.body;
    if (typeof (id) == "number" && typeof (title) == "string" && typeof (content) == "string" && typeof (author) == "string") {
        next()
    }
    else {
        res.send("Validation Failed")
    }

}

let logger = (req, res, next) => { 
    let method = req.method;
    let url = req.url;
    let userAgent = req.get('user-agent');

    let log = `${method}, ${url}, ${userAgent}`;
    console.log(log);
    fs.appendFile("logs.txt", log + "\n", err => {
      if (err) {
        console.log(err);
      }
    });
    next();
  };
  
app.use(logger);

 

 /** Create an post */
app.post("/posts/create", validator, (req, res) => {
    const payload = (req.body)
    const data = fs.readFileSync("./posts.json", { encoding: "utf-8" })
    const parseData = JSON.parse(data);
    const posts = parseData.posts
    const Newproducts = [...posts, payload];
    parseData.posts = Newproducts;
    const latest_data = JSON.stringify(parseData)
    fs.writeFileSync("./posts.json", latest_data, "utf-8")
    res.send("posts has been added")
})

/** Get all posts */
app.get("/posts", (req, res) => {
    const data = fs.readFileSync("./posts.json", { encoding: "utf-8" })
    const parsedData = JSON.parse(data)
    parsedData.posts.map((el) => {
        res.write(JSON.stringify(el.id))
        res.write(JSON.stringify(el.title))
        res.write(JSON.stringify(el.content))
        res.write(JSON.stringify(el.author))
      

    })
    res.send()
})

   /* Guard Middlewares */

const guard = (req, res, next) =>{
    const password = req.query.password
    if ( password != 54123){
        return res.send ({
            message: "You are not authorised to do this operation"
        })
    }
    next()
 }
   app.use (guard);

/** Update an post */
app.patch("/posts/:id", (req, res) => {
    const data = fs.readFileSync("./posts.json", { encoding: "utf-8" })
    const parsedData = JSON.parse(data)
    const posts = parsedData.posts
    var id = req.params["id"]

    const post = posts.find(item => ":" + item.id === id);
    console.log(id, post)
    const index = posts.indexOf(post);
    posts[index] = req.body;
    const latest_data = JSON.stringify(parsedData)
    fs.writeFileSync("./posts.json", latest_data, "utf-8")
    res.send("post has been updated")
})

/** Delete a post */
app.delete("/posts/:id", (req, res) => {
    const data = fs.readFileSync("./posts.json", { encoding: "utf-8" })
    const parsedData = JSON.parse(data)
    const posts = parsedData.posts
    const post = posts.find(item => ":" + item.id === req.body.id);
    const index = posts.indexOf(post);
    posts.splice(index, 1);
    const latest_data = JSON.stringify(parsedData)
    fs.writeFileSync("./posts.json", latest_data, "utf-8")
    res.send("post has been deleted")
})



app.listen(3008, () => {
    console.log("Server is listening on http://localhost:3008")
})


// const express = require('express')
// const Post = require('./post.js')

// const app = express()
// app.use(express.json())

// const post = new Post('posts.json')

// const validator = (req, res, next) => {

//     const info = req.body

//     if (!info.id) {
//         return res.status(400).send("id required")
//     } else {
//         if (typeof (info.id) != "number") {
//             return res.status(400).send("id should be Number")
//         }
//     }

//     if (!info.title) {
//         return res.status(400).send("title required")
//     } else {
//         if (typeof (info.title) != "string") {
//             return res.status(400).send("title should be String")
//         }
//     }

//     if (!info.content) {
//         return res.status(400).send("content required")
//     } else {
//         if (typeof (info.content) != "string") {
//             return res.status(400).send("content should be String")
//         }
//     }

//     if (!info.author) {
//         return res.status(400).send("author required")
//     } else {
//         if (typeof (info.author) != "string") {
//             return res.status(400).send("author should be String")
//         }
//     }


//     next()
// }
// app.use(validator)

// /** Create an post */
// app.post('/posts/create', (req, res) => {

//     const information = req.body

//     post.addPost(information)

//     res.send({
//         message: "post has been created"
//     })
// })


// /** Get all posts */
// app.get('/posts', (req, res) => {
//     try {
//         const posts = post.getAll()

//         res.status(200).send(posts)
//     } catch (error) {
//         res.status(500).send({
//             message: error.message
//         })
//     }
// })


// /** Update an post */
// app.patch('/posts/:id', (req, res) => {

//     const id = parseInt(req.params.id)

//     const information = req.body

//     post.updatePost(information, id)

//     return res.status(200).send({
//         message: 'post has been updated '
//     })
// })

// /** Delete an post */
// app.delete('/posts/:id', (req, res) => {

//     const id = parseInt(req.params.id)

//     try {
//         post.deletePost(id)

//         return res.send({
//             message: "post has been deleted"
//         })

//     } catch (error) {

//         res.status(500).send({
//             message: error.message
//         })
//     }
// })

// /** Get post by id */
// app.get('/posts/:id', (req, res) => {

//     const id = parseInt(req.params.id)

//     const information = post.getById(id)

//     if (information) {
//         return res.send({
//             data: information
//         })
//     } else {
//         return res.status(404).send({
//             message: "post does not exist."
//         })
//     }

// })


// app.listen(3004, () => {
//     console.log('Server is listening on http://localhost:3004')
// })