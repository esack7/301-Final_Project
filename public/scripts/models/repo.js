'use strict';
var app = app || {};

(function(module) {
  const repos = {};
// vote average needs to take in a number with a decimal
  let vote_average;
  // genre takes in movie genre...
  let genre;
  let genreInput;

  // runtime
  let runtime;
  let query;

  let genreObject = {'28': 'Action', '12': 'Adventure', '16': 'Animation', '35': 'Comedy', '80': 'Crime', '99': 'Documentary', '18': 'Drama', '10751': 'Family', '14': 'Fantasy', '36': 'History', '27': 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Science Fiction', 10770: 'TV Movie', 53: 'Thriller', 10752: 'War', 37: 'Western'};


  $('#topThree').click(function (event) {
    console.log('topThree BUTTON FIRED!!!');
    repos.all = [];
    console.log('app.repos.all is CLEARED!');
    event.preventDefault();
    vote_average = $('#voteAverageDropDown').val();
    genreInput = $('#genreDropDown').val();
    console.log(genreObject);
    console.log('genreInput = ' + genreInput);
    genre = Object.values(genreObject)[Object.keys(genreObject).indexOf(genreInput)];
    runtime = $('#durationDropDown').val();
    console.log('vote_average = ' + vote_average + '  genre = ' + genre + '  runtime = ' + runtime);
    query = 'https://api.themoviedb.org/3/discover/movie?api_key=8f303e30bafa7db2b3656c65726f874c&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&' + 'vote_average.lte=' + vote_average + '&with_genres=' + genreInput + '&with_runtime.gte=' + runtime;
    repos.requestMovie();
    console.log(' ');
    console.log(repos.all);
  });

  // function randomTopThree() {
  //   console.log(Object.values(Object.values(app.repos.all[0])[3][0])[4])
  //   let getTitle = Object.values(Object.values(app.repos.all[0])[3][0])[4]
  // }

  console.log('isaac is here!');
  repos.all = [];
  repos.requestMovie = function(callback) {
    var settings = {
      'async': true,
      'crossDomain': true,
      'url': query ,
      'method': 'GET'
    }

    $.get(settings).then(function (response) {
      repos.all.push(response);
    })
    .then(callback);
  };

  module.repos = repos;
})(app);
