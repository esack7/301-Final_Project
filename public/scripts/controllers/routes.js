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
