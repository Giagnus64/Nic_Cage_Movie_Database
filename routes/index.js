const express = require('express');
const router = express.Router();


router.get('/api', (req,res) =>{
    res.json({
        status: 'API is currently working!',
        message: "You've reached the base page of the api. Please search using the parameters defined at the home page."

    });
});

module.exports = router;