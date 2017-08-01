'use strict';
var app = app || {};

// page('/', app.login.init);
// page('/pick', app.picks.init);
// page('/about', app.aboutController.init);
// page('/results', app.results.init);
// page();

// jquery for fade in and out on sections
$(document).ready(function() {

  $('.tab').on('click', function() {
    $('.hpsection').hide();
    $('#' + $(this).data('content')).fadeIn('slow');
  });
  $('.tab:first').click();


});
