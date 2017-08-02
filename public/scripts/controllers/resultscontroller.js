'use strict';
var app = app || {};
//This is where most of the code for the rendering of the 3 choices will go.

(function(module) {
  const resultsController = {};
  resultsController.init = function (){
    $('#tab-content').hide();
    $('#about').show();
  }

  

  module.resultsController = resultsController;

})(app);
