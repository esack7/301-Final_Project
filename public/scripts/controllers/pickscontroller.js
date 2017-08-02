'use strict';
var app = app || {};
//Show hide funtionatlity for about us section
(function(module) {
  const picksController = {};
  picksController.init = function (){
  }

  //This shows the movie results on button click
  $('.button').on('click', function(){
    $('.tab-content').hide();
    $('#displayMovie').show();
  //This would be in theory where we get an ajax call after the button click, after the user selected from drop downs.
    app.vote_average = $('#voteAverageDropDown').val();
    app.genre = $('#genreDropDown').val();
    app.runtime = $('#durationDropDown').val();

    app.query  = 'https://api.themoviedb.org/3/discover/movie?api_key=8f303e30bafa7db2b3656c65726f874c&language=en-US&sort_by=vote_average.asc&include_adult=false&include_video=false&page=1&' + 'vote_average.lte=' + app.vote_average + '&with_genres=' + app.genre + '&with_runtime.gte=' + app.runtime;

    $.get(app.settings).then(function (response) {
      console.log('why isnt this working');
      app.repos.all = response;
    })
    .then(app.callback);

    app.repos.requestMovie();
    console.log(app.repos.all)
    

  });


  module.picksController = picksController;
})(app);
