'use strict';
var app = app || {};

// jquery for fade in and out on sections
$(document).ready(function() {

  $('.tab').on('click', function() {
    $('.hpsection').hide();
    $('#' + $(this).data('content')).fadeIn('slow');
  });
  $('.tab:first').click();


});
