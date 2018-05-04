const express = require('express');
const app = express();
const path = require('path');

// serve the static files in the dist directory
app.use(express.static('./dist/shanebesong'));

app.get('/*', function(req, res) {
  res.sendFile(path.join('./dist/shanebesong/index.html'));
});

app.listen(process.env.PORT || 8080);
