'use strict';
var app = app || {};

(function(module) {
  const repos = {};


  let rawData;
  // let page = 1;
  // let vote_average = 7
  // let genre = 18
  // let runtime = 60;
  let requestMovie = function(callback) {
    $.get('movie?api_key=&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=7&with_genres=18&with_runtime.gte=60')
    .then(
      data => {
        console.log(data);
        rawData = data;
        console.log(rawData);
      },
      err => console.error(err)
    )
    .then(callback)
  };

  requestMovie();


  module.repos = repos;
})(app);
