'use strict';
// const pg = require('pg');
// const fs = require('fs');
const express = require('express')
const request = require('superagent')
const app = express()
// const request = require('request');
// const querystring = require('querystring');
// const bodyParser = require('body-parser');
// const requestProxy = require('express-request-proxy')
// .urlencoded({extended: true});
const PORT = process.env.PORT || 3000;

// app.use(express.static('.'))
app.use(express.static('./public'))


// app.use(express.static('./public'))
//     .get('*',function (req,res) {
//       res.sendFile('index.html', {root:'./public'});
//     })

//This will be our future login information sending to PS
// app.post('/articles', bodyParser, function(request, response) {
//   response.send('Record posted to server!!');
// })
//
// app.get('/', function(request, response) {response.sendFile('index.html', {root:'./'});
// });


// const client_id = process.env.CLIENT_ID;
// const redirect_uri = process.env.REDIRECT_URI;


// function proxytheMoviedb(request, response) {
//   console.log('Routing MovieDB request for', request.params[0]);
//   (requestProxy({
//     url: `https://api.themoviedb.org/3/discover/movie?api_key=` +`${process.env.theMoviedb_Token}` + `${request.params[0]}`,
//     // headers: {Authorization: `token ${process.env.theMoviedb_Token}`}
//   })
//   )(request, response);
// }

app.get('/discover', (req, res) => {
  let q = req.query
  request
  .get('https://api.themoviedb.org/3/discover/movie')
  .query({
    'language': 'en-US',
    'region': 'US',
    'sort_by': 'popularity.desc',
    'include_adult': 'false',
    'include_video': 'false',
    'page': `${q.page}`,
    'vote_average.gte': `${q.vote_average}`,
    'with_genres': `${q.with_genres}`,
    'with_runtime.gte': `${q.with_runtime}`,
    'api_key': `${process.env.theMoviedb_Token}`
  })
  .end((err, response) => {
    if(err) console.log(err)
    res.json(response.body)
  })
})

app.listen(PORT, function() {
  console.log(`Listening on port: "${PORT}"`);
});
