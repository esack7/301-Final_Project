'use strict';
var app = app || {};

// page('/', app.articleController.loadAll, app.articleController.index);
// page('/about', app.aboutController.index);
// page('/article/:article_id', app.articleController.loadById, app.articleController.index);

// page();


$(document).ready(function() {

  $('#quote').hide();
  $('#heroText').fadeOut();
  $('#heroText').fadeIn(8000);

  $(window).mousemove(function() {
    $('#quote').fadeIn(5000);
  })
  $('.icon-menu').on('click', function() {
    $(this).hide();
    $('header nav ul').fadeIn('slow');
    $(this).fadeIn(3000);

  });
});
