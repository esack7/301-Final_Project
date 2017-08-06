'use strict';
const express = require('express')
const request = require('superagent')
const app = express()
const PORT = process.env.PORT || 3000;
const mongo = require('mongodb')
const assert = require('assert')

// this points to the mongo data base === the mongo database is tells you the default is at 27017 on our local machine when we start the server in our terminal.
// what follows the 27017 is the name of the db.
const url = 'mongodb://localhost:27017/flix';

router.get('/get-data', function(req, res, next) {

});

router.post('/insert', function(req, res, next) {
  var newUser = new User()
});

router.post('/update', function(req, res, next) {

});

router.post('/delete', function(req, res, next) {

});

app.use(express.static('./public'))

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

    'page':`${q.page}`,

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
