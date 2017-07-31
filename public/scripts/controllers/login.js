'use strict';

var app = app || {};

$('#about').hide();
$('#displayMovie').hide();
$('#main').show();

$('#initiate').submit(function (event) {
  event.preventDefault();
  $('#initiate').hide();
  $('#initiate').hide();
  $('#main').show();
});
