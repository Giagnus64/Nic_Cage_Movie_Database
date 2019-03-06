const http = require ('http');
const path = require('path');
const fs = require('fs');
const url = require ('url');
const fromEntries = require('fromentries');
const https = require('https');

//pull character list
const characterList = require('./character_raw.js');
// //make new array of objects to place into json
// let filteredObjArray = [];
// //iterate through objects and pull relevant data - push new objects to array
// characterList.cast.forEach( (obj) => {
// 	let entryArray = Object.entries(obj);
// 	const goodEntries = ['character', 'id', 'title', 'original_title', 'release_date', 'overview'];
// 	let filteredArray = entryArray.filter( (entry) => { 
// 		if(goodEntries.includes(entry[0])){
// 		return true;
// 		};
// 	});
// 	let filteredObj = fromEntries(filteredArray);
// 	filteredObjArray.push(filteredObj);
// });

// const jsonObj = {"filtered": filteredObjArray};


// // const goodEntries = ['character', 'id', 'title', 'original_title', 'release_date', 'overview'];
// // let filteredArray = entryArray.filter( (entry) => { 
// // 	if(goodEntries.includes(entry[0])){
// // 		return true;
// // 	};
// // });

// fs.writeFile(path.join(__dirname, '/sorted', 'sortedcharacters.js'), JSON.stringify(jsonObj), 'utf8', (err) => {
// 	if (err) throw err;
// 	console.log('copied');
// 	return true;
// 	}
// );

// return true;

//console.log(characterList.cast.length);

//gets array of IDs
const idArray = []
characterList.cast.forEach((obj) =>{
	idArray.push(obj.id);
});

const movieArray = [];
function getter(id){
	https.get(`https://api.themoviedb.org/3/movie/${id}?api_key=78244b76504c985892e4dca53b988a15&language=en-US`, (res) => {
		let data = '';
		res.on('data', (chunk) => {
		data+= chunk
		});
		res.on('end', () =>{
		movieArray.push(JSON.parse(data));
		});
	});
}
//Asynchronous function sending movie requests once per 2 seconds
async function print(n) {
  await new Promise(resolve => setTimeout(() => resolve(), 2000));
 	https.get(`https://api.themoviedb.org/3/movie/${n}?api_key=78244b76504c985892e4dca53b988a15&language=en-US`, (res) =>{
		let data = '';
		res.on('data', (chunk) => {
		data+= chunk
		});
		res.on('end', () =>{
		movieArray.push(JSON.parse(data));
		console.log(data);
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

function fuck(){
	const jsonObj = {'movies': movieArray};
	fs.writeFile(path.join(__dirname, '/sorted', 'sortedmovies.js'), JSON.stringify(jsonObj), 'utf8', (err) => {
	if (err) throw err;
	console.log('copied');
	return true;
	}
	);
}
setTimeout(fuck, 240000);


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
// });