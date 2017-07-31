'use strict';
var app = app || {};



$('#about').hide();
$('#displayMovie').hide();
$('#main').show();

$('#home').submit(function (event) {
  event.preventDefault();
  $('#displayMovie').hide();
  $('#about').hide();
  $('#main').show();
});

$('#about-us').submit(function (event) {
  event.preventDefault();
  $('#displayMovie').hide();
  $('#main').hide();
  $('#about').show();
});


(function(module) {
  // const homeController = {};


  module.articleController = articleController;
})(app);
