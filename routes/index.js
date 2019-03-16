const express = require('express');
const router = express.Router();
const Movie = require('../models/movie');


router.get('/api', (req,res) =>{
    res.json({
        status: 'API is currently working!',
        message: "You've reached the base page of the api. Please search using the parameters defined at <homepageUrl>"

    });
});

module.exports = router;