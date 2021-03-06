const express = require('express'),
      mongoose = require('mongoose');
const Movie = require('./models/movie');
const movieList = require('./sorted/moviesV2.json');
const middleWare = require('./middleware');


mongoose.connect(
    process.env.DATABASEURL, { useNewUrlParser: true }
);
console.log(process.env.DATABASEURL);

const app = express();


//MiddleWare
app.use(express.json());
app.use(express.urlencoded({extended:false}));
app.use('/', require('./routes'));
app.use('/api/movies', require('./routes/movieController'));
app.use(express.static("./public"));
app.use(middleWare.handler404);
app.use(middleWare.handler500);


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
});
*/