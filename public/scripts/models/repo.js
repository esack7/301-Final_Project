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

//first movie pic attributes
  let topThreeOneTitle;
  let topThreeOneOverview;
  let topThreeOneImg;
//second movie pic attributes
  let topThreeTwoTitle;
  let topThreeTwoOverview;
  let topThreeTwoImg;
  //third movie pic attributes
  let topThreeThreeTitle;
  let topThreeThreeOverview;
  let topThreeThreeImg;

  let topThreeCounter;
  let randomMovie;

  let genreObject = {'28': 'Action', '12': 'Adventure', '16': 'Animation', '35': 'Comedy', '80': 'Crime', '99': 'Documentary', '18': 'Drama', '10751': 'Family', '14': 'Fantasy', '36': 'History', '27': 'Horror', 10402: 'Music', 9648: 'Mystery', 10749: 'Romance', 878: 'Science Fiction', 10770: 'TV Movie', 53: 'Thriller', 10752: 'War', 37: 'Western'};

  $('#topThree').click(function (event) {

    $('#top-three-one-title').html('');
    $('#top-three-two-title').html('');
    $('#top-three-three-title').html('');
    $('#top-three-one-overview').html('')
    $('#top-three-two-overview').html('')
    $('#top-three-three-overview').html('')
    $('#displayMovie').show();
    $('#main').hide();
    console.log('topThree BUTTON FIRED!!!');
    topThreeCounter = 0;
    repos.all = [];
    vote_average;
    genre = '';
    genreInput = '';
    runtime = '';
    topThreeOneTitle = '';
    topThreeTwoTitle = '';
    topThreeThreeTitle = '';
    console.log('app.repos.all is CLEARED!');
    event.preventDefault();

    if (!$('#voteAverageDropDown').val()) {
      vote_average = $('#voteAverageDropDown').val();
    } else {
      console.log('ELSEELSE')
      vote_average = Math.floor(Math.random() * 9) + 1
      console.log(vote_average);
    }

    if (!$('#genreDropDown').val()){
      genreInput = $('#genreDropDown').val();
    } else {
      genreInput = 18;
    }
    console.log(genreObject);
    console.log('genreInput = ' + genreInput);
    //this is way too complicated ..genre = $('genreDropDown').val gives you a number already to the right genre
    genre = Object.values(genreObject)[Object.keys(genreObject).indexOf(genreInput)];

    if (!$('#durationDropDown').val()){
      runtime = $('#durationDropDown').val();
    } else {
      runtime = Math.floor(Math.random() * 120) + 30
    }
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
    query = 'https://api.themoviedb.org/3/discover/movie?api_key=8f303e30bafa7db2b3656c65726f874c&language=en-US&region=US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&' + 'vote_average.lte=' + vote_average + '&with_genres=' + genreInput + '&with_runtime.gte=' + runtime;
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
    query = 'https://api.themoviedb.org/3/discover/movie?api_key=8f303e30bafa7db2b3656c65726f874c&language=en-US&region=US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&' + 'vote_average.lte=' + vote_average + '&with_genres=' + genreInput + '&with_runtime.gte=' + runtime;
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
    query = 'https://api.themoviedb.org/3/discover/movie?api_key=8f303e30bafa7db2b3656c65726f874c&language=en-US&region=US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&' + 'vote_average.lte=' + vote_average + '&with_genres=' + genreInput + '&with_runtime.gte=' + runtime;
    repos.requestMovie(randomTopThree);
    console.log(' ');
  });

  let appendTopThreeMovies = () => {
    console.log('appendTopThreeMovies FIRE FIRE FIRE!!!')

    //Appending the first movie picks attributes
    $('#top-three-one-title').html(topThreeOneTitle);
    $('#top-three-one-overview').html(topThreeOneOverview);
    $("<p><a href='https://www.netflix.com/search'><button>Take Me To Netflix</button></a></p>").appendTo('#top-three-one-overview');
    // console.log('appending description 1');
    // console.log('description = ' + topThreeOneOverview);
    // console.log('image = ' + topThreeOneImg)
    // https://image.tmdb.org/t/p/w500/+uX6yITcNgq81Z5q9sB1PN6ItcNG.jpg
    // $('top-three-one-img').img(https://image.tmdb.org/t/p/w500/ + topThreeOneImg);
    // $('#poster').html('<h2>Here is your poster </h2><img id="thePoster" src=' + json.results[0].posters[0].image.url+ '/> ')

    //Appending the second movie picks attributes
    $('#top-three-two-title').html(topThreeTwoTitle);
    $('#top-three-two-overview').html(topThreeTwoOverview);
    $("<p><a href='https://www.netflix.com/search'><button>Take Me To Netflix</button></a></p>").appendTo('#top-three-two-overview');
    // console.log('appending description 2');
    // console.log('description = ' + topThreeTwoOverview);

    //Appending the third movie picks attributes
    $('#top-three-three-title').html(topThreeThreeTitle);
    $('#top-three-three-overview').html(topThreeThreeOverview);
    $("<p><a href='https://www.netflix.com/search'><button>Take Me To Netflix</button></a></p>").appendTo('#top-three-three-overview');
    // console.log('appending description 3');
    // console.log('description = ' + topThreeThreeOverview);

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
    $('#top-three-one-overview').html('')
    $('#top-three-two-title').html('');
    $('#top-three-two-overview').html('')
    $('#top-three-three-title').html('');
    $('#top-three-three-overview').html('')
    console.log('TOPTHREE movies FIRE!!! below listed!')
    console.log(topThreeOneTitle, topThreeTwoTitle, topThreeThreeTitle);
    if (topThreeCounter < 18) {
      //selecting top three one - title - description - image
      topThreeOneTitle = Object.values(Object.values(app.repos.all[0])[3][topThreeCounter])[4];
      topThreeOneOverview = Object.values(Object.values(app.repos.all[0])[3][topThreeCounter])[12];
      topThreeOneImg = Object.values(Object.values(app.repos.all[0])[3][topThreeCounter])[6];
      topThreeCounter++;
      //selecting top three two - title - description - image
      topThreeTwoTitle = Object.values(Object.values(app.repos.all[0])[3][topThreeCounter])[4]
      topThreeTwoOverview = Object.values(Object.values(app.repos.all[0])[3][topThreeCounter])[12];
      topThreeTwoImg = Object.values(Object.values(app.repos.all[0])[3][topThreeCounter])[6];
      topThreeCounter++;
      //selecting top three three - title - description - image
      topThreeThreeTitle = Object.values(Object.values(app.repos.all[0])[3][topThreeCounter])[4]
      topThreeThreeOverview = Object.values(Object.values(app.repos.all[0])[3][topThreeCounter])[12]
      topThreeThreeImg = Object.values(Object.values(app.repos.all[0])[3][topThreeCounter])[6];

      appendTopThreeMovies();
    } else {
      topThreeCounter = 0;
      topThreeOneTitle = Object.values(Object.values(app.repos.all[0])[3][topThreeCounter])[4]
      topThreeCounter++;
      topThreeTwoTitle = Object.values(Object.values(app.repos.all[0])[3][topThreeCounter])[4]
      topThreeCounter++;
      topThreeThreeTitle = Object.values(Object.values(app.repos.all[0])[3][topThreeCounter])[4]
      appendTopThreeMovies();
    }
    topThreeCounter++;
  }


  repos.all = [];
  repos.requestMovie = function(callback) {

    let data = {}
    data.with_genres = $('#genreDropDown').val()
    data.with_runtime = $('#durationDropDown').val()
    data.vote_average = $('#voteAverageDropDown').val()

    $.get('/discover', data)
    .then(function (response) {
      repos.all.push(response);
    })
    .then(callback);
  }

  // data.with_genres = $('#genreDropDown').val()
  // data.with_runtime = $('#durationDropDown').val()
  // data.vote_average = $('#voteAverageDropDown').val()
  //
  // let success = () => {}
  // let error = () => {}
  //
  // console.log(data);
  //
  // $.get('/discover', data)
  // .then(success => console.log('success', success), error => console.log('error', error))
  // };

  module.repos = repos;
})(app);
