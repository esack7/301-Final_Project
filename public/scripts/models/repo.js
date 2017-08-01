'use strict';
var app = app || {};

(function(module) {
  const repos = {};
  console.log('isaac is here!');
  repos.all = [];
  // let repos.rawData;
  // let page = 1;
  // let vote_average = 7
  // let genre = 18
  // let runtime = 60;
  repos.requestMovie = function(callback) {
    var settings = {
      'async': true,
      'crossDomain': true,
      'url': 'https://api.themoviedb.org/3/discover/movie?api_key=8f303e30bafa7db2b3656c65726f874c&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=7&with_genres=18&with_runtime.gte=60',
      'method': 'GET'
    }

    $.get(settings).then(function (response) {
      repos.all = response;
    })
    .then(callback);
    // $.get('&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page=1&vote_average.gte=7&with_genres=18&with_runtime.gte=60')
    // .then(
    //
    //       function(data) {
    //         repos.all = data;
    //       },
    //       function(error) {
    //         console.log('error', error);
    //       }
    //     )
    //     .then(callback)
  };

  module.repos = repos;
})(app);
