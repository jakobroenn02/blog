const express = require('express');
const app = express();

const router = require('./routes.js');


app.use(express.static(__dirname + '/public'));
app.use('/', router);
app.listen(8080);
console.log('Server is running on port 8080');




