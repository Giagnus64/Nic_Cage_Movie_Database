const express = require('express');
const router = express.Router();
const Movie = require('./models/movie');


router.get("/", (req, res) => {
    res.send("Welcome to the home page!");
});

router.get("/api/movies", (req, res) => {
    Movie.find({}, (err, movies) => {
        (err) ? console.log("Error" + err) :
            res.header("Content-Type", 'application/json');
        res.json(movies);
    });

});
router.get('/api', (req,res) =>{
    res.json({
        status: 'API is currently working!',
        message: "You've reached the base page of the api. Please search using the parameters defined at <homepageUrl>"

    });
});

module.exports = router;