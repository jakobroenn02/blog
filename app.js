express = require('express');
app = express();
app.use(express.static(__dirname + '/public'));
app.listen(3000);
console.log('Server is running on port 3000');

//serve the index.html file and script.js file and style.css file


