'use strict';

const express = require('express')
const request = require('superagent')
const app = express()
const PORT = process.env.PORT || 3000;

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
    'page': '1',
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
