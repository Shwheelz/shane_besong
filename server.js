const express = require('express');
const app = express();

// serves the static files in the dist directory
app.use(express.static(__dirname + '/dist'));

// start the app by listening on the default Heroku port
app.listen(process.env.PORT || 8080);
