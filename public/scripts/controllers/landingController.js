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

    // $('#login-button').on('click', function(event) {
    //   let name = $('#login-name').val();
    //   let email = $('#login-email').val();
    //   app.User.loadRemote(name, email, function() {
    //     $('#tab-content').addClass('hidden');
        // $('#name').text(app.User.name);
      //   // next();
      // });
    event.preventDefault();
    // });
  };

  module.landingController = landingController;
})(app);
