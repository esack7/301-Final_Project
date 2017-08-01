// 'use strict'
//
//
// $('#genreDropDown').on('click', function(event) {
//   event.console.log('sup')
// });
//
// $('#durationDropDown').on('click', function(event) {
//   event.console.log('sup')
// });
//
// $('#voteAverageDropDown').on('click', function(event) {
//   event.console.log('sup')
// });
//
// $('#topThree').on('click', function (event) {
//   event.preventDefault();
//   var query = $('#genreDropDown').val();
// })
//
// $('#random').on('click', function (event) {
//   event.preventDefault();
//   var query = $('#genreDropDown').val();
// })
//
// $('#searchMoviesButton').on('click', function (event) {
//   event.preventDefault();
//   var query = $('#movieSearch').val();
//
//
//
//
//   var settings = {
//     'async': true,
//     'crossDomain': true,
//     'url': 'https://api.themoviedb.org/3/search/movie?api_key=' + `${THEMOVIEDB_TOKEN}` + '&query=' + encodeURI(query),
//     'method': 'GET',
//     'headers': {},
//     'data': '{}'
//   };
//
//   $.ajax(settings).done(function (response) {
//     console.log(response);
//   });
// });
