const http = require ('http');
const path = require('path');
const fs = require('fs');
const url = require ('url');
const fromEntries = require('fromentries');
const https = require('https');

//pull json lists
// const characterSort = require('./sorted/sortedcharacters.json');
// const movieSort = require('./sorted/sortedmovies.json');
// const charMovieSort = require('./sorted/charMovieSorted.json');
// const fixedGenresSort = require('./sorted/fixedGenres.json');
// const castAndCrew = require('./sorted/castandcrew_raw copy.json');
// const moviesDirGen = require('./sorted/moviesDirGen.json');
// const omdbRaw = require('./sorted/omdb_raw.json');
// const moviesAlmost = require('./sorted/moviesAlmost.json');
//const moviesFinished = require('./sorted/moviesFinished.json');
const moviesSorted = require('./sorted/moviesDone.json');

// let genresFixed = [];

// moviesSorted.movies.forEach((movieObj) =>{
// 	let genreArray = [];
// 	movieObj.genres.forEach((genreObj) =>{
// 		genreArray.push(genreObj.name);
// 	});
// 	movieObj.genres = genreArray;
// 	genresFixed.push(movieObj);
// });

// const jsonObj = {movies: genresFixed};
// //console.log(jsonObj);

// fs.writeFile(path.join(__dirname, '/sorted', 'moviesV2.json'), JSON.stringify(jsonObj), 'utf8', (err) => {
// 	if (err) throw err;
// 	console.log('copied');
// 	return true;
// });

//========================
//FIX MOVIE IDS
//========================
/*
const idsFixed = [];
let idCounter = 1;
moviesFinished.movies.forEach( (movieObj) =>{
	movieObj.id = idCounter;
	idsFixed.push(movieObj);
	idCounter++;
});

const jsonObj = {movies: idsFixed};

fs.writeFile(path.join(__dirname,'/sorted', 'moviesDone.json'), JSON.stringify(jsonObj), 'utf8', (err) =>{
	if (err) throw err;
	console.log('copied');
	return true;
});
*/

// fs.writeFile(path.join(__dirname, '/sorted', 'moviesDirGen.json'), JSON.stringify(jsonObj), 'utf8', (err) => {
// 	if (err) throw err;
// 	console.log('copied');
// 	return true;
// }
// );

// ============================
// OMDB Requests
// ============================
/*
const imdbIdArray = [];
moviesDirGen.movies.forEach((movieObj) => {
	if (movieObj.imdb_id) {
		imdbIdArray.push(movieObj.imdb_id)
	}
	//console.log(movieObj.imdb_id);

});
//console.log(imdbIdArray);
let omdbArray = [];
//Asynchronous function sending movie requests once per 2 seconds
async function print(id) {
	await new Promise(resolve => setTimeout(() => resolve(), 1000));
	http.get(`http://www.omdbapi.com/?i=${id}&apikey=fcd387a0`, (res) => {
		let data = '';
		res.on('data', (chunk) => {
			data += chunk
		});
		res.on('end', () => {
			omdbArray.push(JSON.parse(data));
			console.log(data);
		});
	});
}

async function test() {
	// This is where the magic happens. Each `print()` call returns a promise,
	// so calling `then()` chains them together in order and prints 0-9 in order.
	await imdbIdArray.
		reduce((promise, id) =>
			promise.then(() => print(id)), Promise.resolve()).catch((err) => console.log(err));
}


*/
//===========================================
//===========================
// Merge directors into Movie List
//===========================
/*
const dirMovieList = [];

//console.log(castAndCrew.moviesByCast[0].crew[0].name);


castAndCrew.moviesByCast.forEach((movieCastObj) => {
	fixedGenresSort.movies.forEach((movieGenObj) => {
		if(movieCastObj.id === movieGenObj.id){
			movieGenObj.director = movieCastObj.crew[0].name 
			dirMovieList.push(movieGenObj);
		}
	});
});
const jsonObj = {"movies": dirMovieList};
*/
//===============================

// fs.writeFile(path.join(__dirname, '/sorted', 'moviesDirGen.json'), JSON.stringify(jsonObj), 'utf8', (err) => {
// 	if (err) throw err;
// 	console.log('copied');
// 	return true;
// }
// );

//============================
//rename genre ids by personal genre json
//============================
/*
let fixedGenreList = [];
//sort through objects
charMovieSort.movies.forEach((movieObj) =>{
	//turn each object into arrays of key value pairs
	let entryArray = Object.entries(movieObj);
	entryArray[0][1].forEach( (genreObj) =>{
		switch(genreObj.name){
			case 'Action':
			genreObj.id = "1";
			break;
			case 'Crime':
			genreObj.id = "2";
			break;
			case 'Drama':
			genreObj.id = "3";
			break;
			case 'Comedy':
			genreObj.id = "4";
			break;
			case 'Romance':
			genreObj.id = "5";
			break;
			case 'Thriller':
			genreObj.id = "6";
			break;
			case 'Science Fiction':
			genreObj.id = "7";
			break;
			case 'Fantasy':
			genreObj.id = "8";
			break;
			case 'Horror':
			genreObj.id = "9";
			break;
			case 'History':
			genreObj.id = "10";
			break;
			case 'Adventure':
			genreObj.id = "11";
			break;
			case 'Mystery':
			genreObj.id = "12";
			break;
			case 'Music':
			genreObj.id = "13";
			break;
			case 'War':
			genreObj.id = "14";
			break;
			case 'Animation':
			genreObj.id = "15";
			break;
			case 'Family':
			genreObj.id = "16";
			break;
			case 'Documentary':
			genreObj.id = "17";
			break;
		}
	});
	const fixedObj = fromEntries(entryArray);
	fixedGenreList.push(fixedObj);
});
const jsonObj = {"movies": fixedGenreList};
*/
//======================================================

//=====================================================
//Request movie data from TMDB,by id, timed so that not too many requests per second
//======================================================
/*
//gets array of IDs
const idArray = []
charMovieSort.movies.forEach((obj) =>{
	idArray.push(obj.id);
});


const movieCreditsArray = [];
// function getter(id){
// 	https.get(`https://api.themoviedb.org/3/movie/${id}?api_key=78244b76504c985892e4dca53b988a15&language=en-US`, (res) => {
// 		let data = '';
// 		res.on('data', (chunk) => {
// 		data+= chunk
// 		});
// 		res.on('end', () =>{
// 		movieArray.push(JSON.parse(data));
// 		});
// 	});
// }
//Asynchronous function sending movie requests once per 2 seconds
async function print(n) {
  await new Promise(resolve => setTimeout(() => resolve(), 2000));
 	https.get(`https://api.themoviedb.org/3/movie/${n}/credits?api_key=78244b76504c985892e4dca53b988a15&language=en-US`, (res) =>{
		let data = '';
		res.on('data', (chunk) => {
		data+= chunk
		});
		res.on('end', () =>{
		movieCreditsArray.push(JSON.parse(data));
		});
	});
}

async function test() {
  // This is where the magic happens. Each `print()` call returns a promise,
  // so calling `then()` chains them together in order and prints 0-9 in order.
  await idArray.
    reduce((promise, n) => 
    	promise.then(() => print(n)), Promise.resolve());
}

test();

function writeToFile(){
	const jsonObj = {'moviesByCast': movieCreditsArray};
	fs.writeFile(path.join(__dirname, '/sorted', 'castandcrew_raw.js'), JSON.stringify(jsonObj), 'utf8', (err) => {
	if (err) throw err;
	console.log('copied');
	return true;
	}
	);
}
setTimeout(writeToFile, 240000);



// //API request per movie 
// const apiKey = "78244b76504c985892e4dca53b988a15";
// let movieID = "795"

// https.get(`https://api.themoviedb.org/3/movie/${movieID}?api_key=78244b76504c985892e4dca53b988a15&language=en-US`, (res) =>{
// 	let data = '';
// 	res.on('data', (chunk) => {
// 		data+= chunk
// 	});
// 	res.on('end', () =>{
// 		console.log(JSON.parse(data));
// 	});
// });*/
//====================================================



//===========================
// Merge characters into Movie List
//===========================
//const charMovieList = [];

// characterSort.filtered.forEach((charObj) => {
// 	movieSort.filtered.forEach((movieObj) => {
// 		if(movieObj.id === charObj.id){
// 			movieObj.character = charObj.character;
// 			charMovieList.push(movieObj);
// 		}
// 	});
// });
//===============================

//==============================================
// Sort through characters/movies from database
//==============================================
/*
const goodEntries = ['genres', 'id', 'imdb_id', 'overview', 'release_date', 'tagline', 'title'];
//const goodEntriesChar = ['character', 'id', 'title', 'original_title', 'release_date', 'overview'];


//make new array of objects to place into json
let filteredObjArray = [];
//iterate through objects and pull relevant data - push new objects to array

movieList.movies.forEach((obj) => {
	//separate object into iterable key value pair arrays
	let entryArray = Object.entries(obj);
	//if array's first entry is a wanted entry, keep it
	let filteredArray = entryArray.filter( (entry) => {
		if(goodEntries.includes(entry[0])){
		return true;
		};
	});
	let filteredObj = fromEntries(filteredArray);
	filteredObjArray.push(filteredObj);
});

 const jsonObj = {"filtered": filteredObjArray};
//==============================================
*/

//===============================================
//Write to external file
//================================================
/*
fs.writeFile(path.join(__dirname, '/sorted', 'sortedmovies.json'), JSON.stringify(jsonObj), 'utf8', (err) => {
	if (err) throw err;
	console.log('copied');
	return true;
	}
);
*/
//============================================


//==================
//Sort Through Genres
//====================
/*
const genreList = [];
charMovieSort.movies.forEach((obj) => {
	obj.genres.forEach((genreObj) => {
		if (!genreList.includes(genreObj)) {
			genreList.push(genreObj);
		}
	});
});
*/
//=========================