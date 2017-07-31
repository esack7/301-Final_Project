'use strict';
const pg = require('pg');
const fs = require('fs');
const express = require('express');
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy');
const PORT = process.env.PORT || 3000;
const app = express();
app.use(express.static('./public'));
app.get('/', function(request, response) {response.sendFile('index.html', {root:'./public'});
});
app.listen(PORT, function() {
  console.log(`Listening on port: "${PORT}"`);
});


function proxytheMoviedb(request, response) {
  console.log('Routing GitHub request for', request.params);
  (requestProxy({
    url: 'https://api.themoviedb.org/3/discover/movie?api_key=' + `${process.env.theMoviedb_Token}`,
  }))(request, response);
}

proxytheMoviedb();
