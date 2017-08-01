'use strict';
const pg = require('pg');
// const fs = require('fs');
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy').urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

app.use(express.static('.'))

//This will be our future login information sending to PS
app.post('/articles', bodyParser, function(request, response) {
  response.send('Record posted to server!!');
})

app.get('/', function(request, response) {response.sendFile('index.html', {root:'./'});
});



function proxytheMoviedb(request, response) {
  console.log('Routing GitHub request for', request.params[0]);
  (requestProxy({
    url: `https://api.themoviedb.org/3/discover/`,
    headers: {Authorization: `token ${process.env.theMoviedb_Token}`}
  })
  )(request, response);
}

app.get('/api.themoviedb.org/*', proxytheMoviedb);

app.listen(PORT, function() {
  console.log(`Listening on port: "${PORT}"`);
});
