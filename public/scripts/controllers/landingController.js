'use strict'

var app = app || {};

(function(module) {
  const landingController = {};

  landingController.index = function(ctx, next) {
    if (app.User.id || app.User.loadLocal()) {
      $('#tab-content').addClass('hidden');
      next();
      return;
    }

    event.preventDefault();

  };

  module.landingController = landingController;
})(app);
