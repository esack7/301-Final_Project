'use strict'


$('#genreDropDown').on('click', function(event) {
  event.console.log('sup')
});

$('#durationDropDown').on('click', function(event) {
  event.console.log('sup')
});

$('#voteAverageDropDown').on('click', function(event) {
  event.console.log('sup')
});

$('#topThree').on('click', function (event) {
  event.preventDefault();
  var query = $('#genreDropDown').val();
})
