'use strict';
var app = app || {};

(function(module) {
  const resultsController = {};
  resultsController.init = function (){
    $('#tab-content').hide();
    $('#about').show();

  }
  module.resultsController = resultsController;

})(app);


console.log("Hey there")
