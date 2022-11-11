const express = require("express");
const connection = require("./configs/db");
const moviesController = require("./controllers/movies.controller");
const app = express();

app.use(express.json());
app.use("/movies", moviesController);
app.get("/", (req, res) => res.send("Hello"));

const PORT = 8080;

app.listen(PORT, async() => {
    try {
        await connection;
        console.log(`Listening on port ${PORT}`);
    } catch(err){
        console.log(err.message);
    }
});