'use strict';

var app = app || {};

var inception = new Audio('/Users/Kimmer/codefellows/301/finalproject/301-Final_Project/public/scripts/controllers/audio/inceptionTheme.mp3');

inception.play();

$('#login').submit(function (event) {
  event.preventDefault();

  ifNoStorage();
});

function ifNoStorage () {
  if (localStorage.length === 0) {

  } else {
    //pullstorage function
    retrieveFromStorage();
  }
}

function moveToStorage () {
  var allStore = JSON.stringify(Product.all);
  localStorage.setItem('data', allStore);
}

function retrieveFromStorage () {
  var allStore = localStorage.getItem('data');
  Product.all = JSON.parse(allStore);
}
