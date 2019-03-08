const express = require('express'),
      mongoose = require('mongoose');
const Movie = require('./models/movie');
const movieList = require('./sorted/moviesV2.json');


mongoose.connect('mongodb://localhost:27017/nic_cage_movie_database', {useNewUrlParser: true});

const app = express();

//MiddleWare
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/', require('./routes'));
app.use('/', require('./movieController'));

//middleware handler for 404 not found
app.use((req,res,next) =>{
    res.status(404).send("Page does not exist. Please visit the home page here:<homepageUrl>");
});

//handler for Error 500
app.use((err,req,res,next) =>{
    console.error(err.stack);
    res.send('This is the 500 page');
});

app.listen(process.env.PORT || 5000, process.env.IP, () => {
    console.log('Server started!');
});



/*
Movie.create({
        "genres": [
            { "id": "1", "name": "Action" },
            { "id": "2", "name": "Crime" },
            { "id": "3", "name": "Drama" }
        ],
        "id": 1,
        "imdb_id": "tt0086216",
        "overview": "Rusty James, an absent-minded street thug struggles to live up to his legendary older brother's reputation, and longs for the days when gang warfare was going on.",
        "release_date": "1983-10-20",
        "tagline": "Rusty James can't live up to his brother's reputation. His brother can't live it down.",
        "title": "Rumble Fish",
        "character": "Smokey",
        "director": "Francis Ford Coppola",
        "supportingActors": [
            "Matt Dillon",
            "Mickey Rourke",
            "Diane Lane",
            "Dennis Hopper"
        ]
});
*/

/*
//Seed Database
movieList.movies.forEach((movieObj) => {
    Movie.create(movieObj);
});*/
