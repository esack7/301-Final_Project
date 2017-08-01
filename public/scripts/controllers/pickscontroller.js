'use strict';
var app = app || {};
//Show hide funtionatlity for about us section
(function(module) {
  const picksController = {};
  picksController.init = function (){
    $('.tab-content').hide();
    $('#displayMovie').show();
  }
  module.picksController = picksController;
})(app);
