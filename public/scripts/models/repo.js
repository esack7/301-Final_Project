'use strict';
var app = app || {};

(function(module) {
  const repos = {};
// vote average needs to take in a number with a decimal
  let vote_average;
  // genre takes in movie genre...
  let genre;
  let genreInput;
  let randomGenreObject;
  let randomNumberForGenre;
  // runtime
  let runtime;
  let query;

  let topThreeOne;
  let topThreeTwo;
  let topThreeThree;
  let topThreeCounter;
  let randomMovie;

  let genreObject = {'28': 'Action', '12': 'Adventure', '16': 'Animation', '35': 'Comedy', '80': 'Crime', '99': 'Documentary', '18': 'Drama', '10751': 'Family', '14': 'Fantasy', '36': 'History', '27': 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Science Fiction', 10770: 'TV Movie', 53: 'Thriller', 10752: 'War', 37: 'Western'};

  $('#topThree').click(function (event) {

    $('#top-three-one-title').html('');
    $('#top-three-two-title').html('');
    $('#top-three-three-title').html('');
    $('#displayMovie').show();
    $('#main').hide();
    console.log('topThree BUTTON FIRED!!!');
    topThreeCounter = 0;
    repos.all = [];
    vote_average;
    genre = '';
    genreInput = '';
    runtime = '';
    topThreeOne = '';
    topThreeTwo = '';
    topThreeThree = '';
    console.log('app.repos.all is CLEARED!');
    event.preventDefault();
    vote_average = $('#voteAverageDropDown').val();
    genreInput = $('#genreDropDown').val();
    console.log(genreObject);
    console.log('genreInput = ' + genreInput);
    //this is way too complicated ..genre = $('genreDropDown').val gives you a number already to the right genre
    genre = Object.values(genreObject)[Object.keys(genreObject).indexOf(genreInput)];
    runtime = $('#durationDropDown').val();
    console.log('vote_average = ' + vote_average + '  genre = ' + genre + '  runtime = ' + runtime);
    query = 'https://api.themoviedb.org/3/discover/movie?api_key=8f303e30bafa7db2b3656c65726f874c&language=en-US&region=US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&' + 'vote_average.lte=' + vote_average + '&with_genres=' + genreInput + '&with_runtime.gte=' + runtime;
    repos.requestMovie(randomTopThree);
    console.log(' ');
  });

  $('#random').click(function (event) {
    event.preventDefault();
    randomMovie = '';
    $('#main').hide();
    $('#displayRandomMovie').show();
    console.log('random BUTTON FIRED!!!');
    repos.all = [];
    vote_average;
    genre = '';
    genreInput = '';
    runtime = '';
    console.log('app.repos.all is CLEARED!');
    console.log('RANDOM Variables below')
    randomizeValues();
    console.log('vote_average = ' + vote_average + '  genre = ' + genre + '  runtime = ' + runtime);
    query = 'https://api.themoviedb.org/3/discover/movie?api_key=8f303e30bafa7db2b3656c65726f874c&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&' + 'vote_average.lte=' + vote_average + '&with_genres=' + genreInput + '&with_runtime.gte=' + runtime;
    repos.requestMovie(appendRandomMovie);
    console.log(' ');
  });

  $('#reroll').click(function (event) {
    event.preventDefault();
    randomMovie = '';
    $('#main').hide();
    $('#displayRandomMovie').show();
    console.log('random BUTTON FIRED!!!');
    repos.all = [];
    vote_average;
    genre = '';
    genreInput = '';
    runtime = '';
    console.log('app.repos.all is CLEARED!');
    console.log('RANDOM Variables below')
    randomizeValues();
    console.log('vote_average = ' + vote_average + '  genre = ' + genre + '  runtime = ' + runtime);
    query = 'https://api.themoviedb.org/3/discover/movie?api_key=8f303e30bafa7db2b3656c65726f874c&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&' + 'vote_average.lte=' + vote_average + '&with_genres=' + genreInput + '&with_runtime.gte=' + runtime;
    repos.requestMovie(appendRandomMovie);
    console.log(' ');
  });

  function appendRandomMovie(){
    console.log('Choosing and APPENDING randome MOVIE');
    randomMovie = Object.values(Object.values(app.repos.all[0])[3][0])[4];
    $('#random-movie-title').html(randomMovie);

  }


  function randomizeValues() {
    // OUR RANDOM GENRE
    randomGenreObject = {1 : {'28': 'Action'}, 2 :  {'12': 'Adventure'}, 3 : {'16': 'Animation'}, 4 : {'35': 'Comedy'}, 5 : { '80': 'Crime'}, 6 : {'99': 'Documentary'}, 7 : {'18': 'Drama'}, 8 : {'10751': 'Family'}, 9 : {'14': 'Fantasy'}, 10 : {'36': 'History'}, 11 : {'27': 'Horror'}, 12 : {10402: 'Music'}, 13 : {9648: 'Mystery'}, 14 : {10749: 'Romance'}, 15 : {878: 'Science Fiction'}, 16 : {10770: 'TV Movie'}, 17 : {53: 'Thriller'}, 18 : {10752: 'War'}, 19 : {37: 'Western'}};

    randomNumberForGenre = Math.ceil(Math.random() * 19)
    // console.log('random genre = ' + Object.keys(Object.values(randomizableGenreObject)[randomNumberForGenre])[0]);
    genreInput = Object.keys(Object.values(randomGenreObject)[randomNumberForGenre])[0]

    // Our random rating
    let randomizableRatingsArray = [1, 2, 3, 4, 5, 6, 7, 8, 9.5];
    let randomNumberForRatings = Math.floor(Math.random() * 9)
    vote_average = randomizableRatingsArray[randomNumberForRatings];

    // Our Random runtime generator
    let randomizableRuntimeArray = [30, 60, 90, 120]
    let randomNumberForRuntime = Math.floor(Math.random() * 4)
    runtime = randomizableRuntimeArray[randomNumberForRuntime];
  }

  $('#next-three').click(function (event) {
    console.log('NEXT THREE BUTTON FIRED!!!');
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
    repos.requestMovie(randomTopThree);
    console.log(' ');
  });

  let appendTopThreeMovies = () => {
    console.log('appendTopThreeMovies FIRE FIRE FIRE!!!')
    $('#top-three-one-title').html(topThreeOne);
    $('#top-three-two-title').html(topThreeTwo);
    $('#top-three-three-title').html(topThreeThree);
    $('#displayMovie').show();
  }

  $('#back-to-filters').click(function (event) {
    event.preventDefault();
    console.log('NEXT THREE BUTTON FIRED!!!');
    $('#displayMovie').hide();
    $('#main').show();
  });

  $('#back-to-filters-two').click(function (event) {
    event.preventDefault();
    console.log('NEXT THREE BUTTON FIRED!!!');
    $('#displayRandomMovie').hide();
    $('#main').show();
  });

  function randomTopThree() {
    $('#top-three-one-title').html('');
    $('#top-three-two-title').html('');
    $('#top-three-three-title').html('');
    console.log('TOPTHREE movies FIRE!!! below listed!')
    console.log(topThreeOne, topThreeTwo, topThreeThree);
    if (topThreeCounter < 18) {
      topThreeOne = Object.values(Object.values(app.repos.all[0])[3][topThreeCounter])[4]
      topThreeCounter++;
      topThreeTwo = Object.values(Object.values(app.repos.all[0])[3][topThreeCounter])[4]
      topThreeCounter++;
      topThreeThree = Object.values(Object.values(app.repos.all[0])[3][topThreeCounter])[4]
      appendTopThreeMovies();
    } else {
      topThreeCounter = 0;
      topThreeOne = Object.values(Object.values(app.repos.all[0])[3][topThreeCounter])[4]
      topThreeCounter++;
      topThreeTwo = Object.values(Object.values(app.repos.all[0])[3][topThreeCounter])[4]
      topThreeCounter++;
      topThreeThree = Object.values(Object.values(app.repos.all[0])[3][topThreeCounter])[4]
      appendTopThreeMovies();
    }
    topThreeCounter++;
  }


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
