'use strict';
// var app = app || {};
// page('/', app.articleController.loadAll, app.articleController.index);
// page('/about', app.aboutController.index);
// page('/article/:article_id', app.articleController.loadById, app.articleController.index);

// page();


$(document).ready(function() {

  $('.tab').on('click', function() {
    $('.hpsection').hide();
    $('#' + $(this).data('content')).fadeIn('slow');
  });
  $('.tab:first').click();


});

let page = '1';
let vote = '7';
let genre = '18';
let runtime = '60';


let urlLink = 'https://api.themoviedb.org/3/discover/movie?api_key=' + `${process.env.theMoviedb_Token}` + '&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false&page='+ page + '&vote_average.gte=' + vote + '&with_genres=' + genre + '&with_runtime.gte=' + runtime

let requestMovie = function() {
  $.ajax({
    url: urlLink,
    method: 'GET',
    headers: {
      'Authorization': `token ${process.env.theMoviedb_Token}`
    }
  })
  .then(
    data => {
      console.log(data);
      let rawData = data;
      console.log(rawData);
    },
    err => console.error(err)
  )
  // .then(callback)
};

requestMovie();
