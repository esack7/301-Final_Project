'use strict';
var app = app || {};

// page('/', app.articleController.loadAll, app.articleController.index);
// page('/about', app.aboutController.index);
// page('/article/:article_id', app.articleController.loadById, app.articleController.index);

// page();


$(document).ready(function() {


  handleMainNav = function() {
    $('.main-nav .tab').on('click', function() {
      $('.tab-content').hide();
      $('#' + $(this).data('content')).fadeIn('slow');
    });
    $('.main-nav .tab:first').click();
  };
  handleMainNav();
});
