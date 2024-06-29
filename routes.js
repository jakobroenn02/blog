//make a route for wish list page
const express = require('express');
const router = express.Router();
//server wishlist.html in public folder
router.get('/wishlist', (req, res) => {
    res.sendFile(__dirname + '/public/wishlist.html');
});
router.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

module.exports = router;