'use strict';
const pg = require('pg');
// const fs = require('fs');
const express = require('express');
// const request = require('request');
// const querystring = require('querystring');
const app = express();
const bodyParser = require('body-parser');
const requestProxy = require('express-request-proxy')
// .urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

// app.use(express.static('.'))


app.use(express.static('./public'))
    .get('*',function (req,res) {
      res.sendFile('index.html', {root:'./public'});
    })

//This will be our future login information sending to PS
app.post('/articles', bodyParser, function(request, response) {
  response.send('Record posted to server!!');
})
//
// app.get('/', function(request, response) {response.sendFile('index.html', {root:'./'});
// });


// const client_id = process.env.CLIENT_ID;
// const redirect_uri = process.env.REDIRECT_URI;


function proxytheMoviedb(request, response) {
  console.log('Routing MovieDB request for', request.params[0]);
  (requestProxy({
    url: `https://api.themoviedb.org/3/discover/movie?api_key=` +`${process.env.theMoviedb_Token}` + `${request.params[0]}`,
    // headers: {Authorization: `token ${process.env.theMoviedb_Token}`}
  })
  )(request, response);
}

app.get('&language*', proxytheMoviedb);

app.listen(PORT, function() {
  console.log(`Listening on port: "${PORT}"`);
});
