const express = require ("express"); 
const Movies = require("../models/movies.models")

const router = express.Router();

 router.get ("/", async (req ,  res) => {
    try {  
        const {title , ratings, sortBy, page, limit} = req.query;
         let queries = {}
         if (title === undefined && ratings === undefined){ 
            queries = {}
     } 
     else if ( title === undefined ) { 
        queries.ratings = ratings 
     } 
     else if ( ratings === undefined){
         queries.title = { ' $ regex' : title , '$options' : 'i'}
     }
     else{
        queries.ratings = ratings ;
        queries.title = { ' $ regex' : title , '$options' : 'i'}
     }
     let sorting = {}
     if(sortBy !== undefined){
        sorting[sortBy] = 1;
     }

     let movies = await Movies.find(queries).sort(sorting).skip((page-1)*limit).limit(limit);
     return res.status(200).send(movies)
    }
    catch(err){
        return res.send(err.message);
    }
})
router.post("/", async(req,res) => {
    try {
        let moviesData = req.body;
        let movies = await Movies(moviesData);
        movies.save();
        return res.status(201).send(movies);
    }
     catch (err) {
        return res.send(err.message);
    }

})

router.patch("/", async(req,res) => {
    try {
        let moviesData = req.body;
        const {id} = req.params;
        let movies = await Movies.findByIdAndUpdate(id,moviesData, { new : true});
        movies.save();
        return res.status(201).send(movies);
    }
     catch (err) {
        return res.send(err.message);
    }

})
router.get("/:id", async(req, res) => {
    try{
        const{id} = req.params;
        let movies = await Movies.findById(id);
        return res.status(200).send(movies)
    }
    catch(err){
        return res.send(err.message);
    }
})

router.delete("/:id", async(req,res) => {
    try {
        const{id} = req.params;
        let movies = await Movies.findByIdAndDelete(id);
        return res.status(200).send(movies)
    } catch(err) {
        return res.send(err.message);
    }
})

module.exports = router;
