const express = require('express');

const middleWareObj = {};

middleWareObj.handler404 = function(req, res, next){
    res.status(404).send("Page does not exist. Please visit the home page here:<homepageUrl>");
};

//handler for Error 500
middleWareObj.handler500 = function(err, req, res, next){
    console.error(err.stack);
    res.send('This is the 500 page');
};

module.exports = middleWareObj;