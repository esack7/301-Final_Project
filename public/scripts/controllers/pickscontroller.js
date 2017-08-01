'use strict';
var app = app || {};


(function(module) {
  const pickscontroller = {};
  pickscontroller.init = function (){

    $('.tab-content').hide();
    $('#main').show();

  }


  module.pickscontroller = pickscontroller;
})(app);
