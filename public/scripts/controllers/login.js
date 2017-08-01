'use strict';

var app = app || {};

var inception = new Audio('scripts/controllers/audio/inceptionTheme.mp3');
let $userName;
let $password;
User.all = [];
User.current;
User.currentValues;

$('#log-out').hide();

function User(userName, userPassword) {
  this.userName = userName;
  this.userPassword = userPassword;
  this.userMovies = [];
  User.all.push(this);
  console.log('Created a New User = ' + this.userName);
}

let appendCurrentUser = () => {
  $('#current-user').html(User.current);
}

$('#login-form').submit(function (event) {
  event.preventDefault();
  console.log('submit button is clicked!')
  $userName = $('#username-input').val();
  $password = $('#password-input').val();
  initLocalStorage();
  appendCurrentUser();
  setCurrentUser()
  $('#login-form').hide();
  $('#log-out').show();
});

$('#log-out').submit(function () {
  $userName = ''
  $password = ''
  User.current = '';
  User.currentValues = [];
  appendCurrentUser();
  console.log('Logging out current user and his values');
  $('#log-out').hide();
  $('#login-form').show();
});

function setCurrentUser() {
  for (var i = 0; i < User.all.length; i++) {
    if ( (Object.values(User.all[i])[0] === $userName) ) {
      console.log('i found the user ' + Object.values(User.all[i])[0]);
      User.currentValues = Object.values(User.all[i]);
      User.current = Object.values(User.all[i])[0];
      console.log('currentUser = ' + Object.values(User.all[i])[0]);
      console.log('User.currentValues = ' + Object.values(User.all[i]));
    } else {
      console.log('setCurrentUser FUNTION ERROR!!!');
    }
  }
}

function retrieveStorageOnPageLoad() {
  if (localStorage.length === 0) {
    console.log('There is no local storage.')
  } else {
    retrieveAllStorage();
    console.log('Initial Local Storage FETCH')
  }
}

function initLocalStorage () {
  if (localStorage.length === 0) {
    console.log('There is no local storage.  CREATING NEW USER;')
    new User ($userName, $password);
    moveAllToStorage();
    setCurrentUser()
  } else if (localStorage.length > 0) {
    //pullstorage function
    retrieveAllStorage();
    setCurrentUser();
    console.log('You CAN NOW TEST UNDEFINED THEORY IF')
    if (User.current === undefined) {
      new User ($userName, $password);
      console.log('created a new USER with the UNDEFINED METHOD')
      retrieveAllStorage();
      setCurrentUser()
    } else {
    //pullstorage function
      console.log('USER EXISTS!!! WECOME BACK!!!')
      retrieveAllStorage();
      setCurrentUser()
    }
  }
}

function moveAllToStorage () {
  let allStorage = JSON.stringify(User.all);
  localStorage.setItem('allStorage', allStorage);
  console.log('Moving all USERS to localStorage');
}

function retrieveAllStorage () {
  var allStorage = localStorage.getItem('allStorage');
  User.all = JSON.parse(allStorage);
}

inception.play();
retrieveStorageOnPageLoad();
