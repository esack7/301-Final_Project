'use strict';

var app = app || {};

var inception = new Audio('audio/inceptionTheme.mp3');
$(document).ready(function (){
  inception.play();
});


// function emptyStorage () {
//   if (localStorage.length === 0) {
// // ONE extra product
//
//   } else {
//     //pullstorage function
//     retrieveFromStorage();
//   }
// }
//
// function moveToStorage () {
//   var allStore = JSON.stringify(Product.all);
//   localStorage.setItem('data', allStore);
// }
//
// function retrieveFromStorage () {
//   var allStore = localStorage.getItem('data');
//   Product.all = JSON.parse(allStore);
// }
