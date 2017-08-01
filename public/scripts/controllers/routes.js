'use strict';
var app = app || {};

// page('/', app.login);
page('/pick', app.picksController.init);
page('/about', app.aboutController.init);
page('/results', app.resultsController.init);
page();

// jquery for fade in and out on sections
$(document).ready(function() {

  $('.tab').on('click', function() {
    $('.hpsection').hide();
    $('#' + $(this).data('content')).fadeIn('slow');
  });
  $('.tab:first').click();


});
