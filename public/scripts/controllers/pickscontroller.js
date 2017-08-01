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



// 'use strict';
//
// var isRequestFinished = true;
//
// function loadAd() {
// }
//
// function disableForm() {
//   var form = document.forms['filters'];
//   var elements = form.elements;
//   for (var i = 0, len = elements.length; i < len; ++i) {
//     elements[i].disabled = true;
//
//   }
// }
//
// function enableForm() {
//   var form = document.forms['filters'];
//   var elements = form.elements;
//   for (var i = 0, len = elements.length; i < len; ++i) {
//     elements[i].disabled = false;
//
//   }
// }
//
// function getstring() {
//   var form = document.forms['filters'];
//   var genre = form.sel_genre.value;
//   var votes = form.lowrating.value;
//   var duration = form.highrating.value;
//   if (isEmpty(director)) {
//     director = 'none';
//     }
//     if (isEmpty(keyword)) {
//         keyword = 'none';
//     }
//     if (isEmpty(actor)) {
//         actor = 'none';
//     }
//     squery = 'genre=' + encodeURIComponent(genre) + '&movies=' + encodeURIComponent(movie_box_checked) + '&tv=' + encodeURIComponent(tv_box_checked) + '&lowrating=' + encodeURIComponent(lowrating) + '&highrating=' + encodeURIComponent(highrating) + '&director=' + encodeURIComponent(director) + '&actor=' + encodeURIComponent(actor) + '&keyword=' + encodeURIComponent(keyword); // NOTE: no '?' before querystring
//
//
//     return squery;
// }
//
// function isEmpty(str) {
//     return (!str || 0 === str.length);
// }
//
// function updatepage(str) {
//
//     document.getElementById("sentback").innerHTML = str;
//
//     $('#sentback').hide().fadeIn('slow');
//
//
// }
//
//
// $(document).ready(function(){
// });
