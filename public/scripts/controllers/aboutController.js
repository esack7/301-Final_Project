'use strict';
var app = app || {};
//Show hide funtionatlity for about us section
(function(module) {
  const aboutController = {};

  aboutController.init = function (){
    $('.tab-content').hide();
    $('#about').show();


  }

  module.aboutController = aboutController;
})(app);
