let MovieModel = require('./models/movie');
const express = require('express');
const app = express();
const router = express.Router();


app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//search by internal ID
router.get("/api/movies/id/:id", (req,res) =>{  
    MovieModel.find({id:req.params.id}, (err, foundMovie) =>{
        if(err) {
            res.json({
              error: "Server Error. Try again."  
            });
        }
        if (foundMovie.length === 0) {
            res.send("No movies were found with your query. Please try again");
        } else {
            res.json(foundMovie);
        }
    });
});
//Search by character name
router.get("/api/movies/character/:character", (req, res) => {
    //ignore case
    const charRegExp = new RegExp(req.params.character, 'i');
    MovieModel.find({ character: charRegExp }, function (err, foundMovie) {
        if (err) {
            res.json({
                error: "Server Error. Please try again."
            });
        }
        if (foundMovie.length === 0) {
            res.send("No movies were found with your query. Please try again");
        } else {
            res.json(foundMovie);
        }
    });
});

// Search by director name
router.get("/api/movies/director/:director", (req, res) => {
    //ignore case
    const dirRegExp = new RegExp(req.params.director, 'i');
    MovieModel.find({ director: dirRegExp }, function (err, foundMovie) {
        if (err) {
            res.json({
                error: "Server Error. Please try again."
            });
        }
        if (foundMovie.length === 0) {
            res.send("No movies were found with your query. Please try again");
        } else {
            res.json(foundMovie);
        }
    });
});

//search by title
router.get("/api/movies/title/:title", (req,res) => {
    //ignore case
    const titleRegExp = new RegExp(req.params.title, 'i');
    MovieModel.find({ title: titleRegExp }, function(err, foundMovie){
        if (err) {
            res.json({
                error: "Server Error. Try again."
            });
        } 
        if (foundMovie.length === 0) {
            res.send("No movies were found with your query. Please try again");
        } else {
            res.json(foundMovie);
        }
    });                 
});
//search by genre
router.get("/api/movies/genre/:genre", (req,res) => {
    //ignore case
    const genreRegExp = new RegExp(req.params.genre, 'i');
    
    MovieModel.find({genres: genreRegExp},
         function(err, foundMovie){
        if (err) {
            console.log(err);
            res.json({
                error: "Server Error. Try again."
            });
        } 
        if (foundMovie.length === 0) {
            res.json("No movies were found with your query. Please try again.");
        } else {
            res.json(foundMovie);
        }
    });                 
});
//Search for random movie
router.get("/api/movies/random", (req,res) => {
    MovieModel.find({ }, (err, movies) => {
        if(err){
            console.log(err);
        }
        let randomID = getRandomInt(97);
        MovieModel.find({ id: randomID }, (err, foundMovie) => {
            if (err) {
                console.log(err);
                res.json({
                    error: "Server Error. Try again."
                });
            }
            if (foundMovie.length === 0) {
                res.json("No movies were found with your query. Please try again.");
            } else {
                res.json(foundMovie);
            } 
        });
    });                  
});


function getRandomInt(max){
    return Math.floor(Math.random() * Math.floor(97));
}



module.exports = router;



