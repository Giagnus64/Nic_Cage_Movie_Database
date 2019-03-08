const mongoose = require("mongoose");


//MOVIE MODEL
const movieSchema = new mongoose.Schema({
    genres: [String], 
    id: Number, 
    imdb_id: String, 
    overview: String, 
    release_date: String, 
    tagline: String, 
    title: String, 
    character: String, 
    director: String, 
    supportingActors: [String]
});

module.exports = mongoose.model("Movie", movieSchema);