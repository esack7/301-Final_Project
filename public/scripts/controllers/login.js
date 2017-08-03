'use strict';

var app = app || {};

// var inception = new Audio('scripts/controllers/audio/inceptionTheme.mp3');
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
  (console.log('login FORM click Fired!!!'))
  event.preventDefault();
  console.log('LOG-IN button is clicked!');
  $userName = $('#username-input').val();
  $password = $('#password-input').val();
  searchLocalStorage();
  appendCurrentUser();
  // setCurrentUser();
  $('#login-form').hide();
  $('#log-out').show();
});

$('#log-out').submit(function (event) {
  event.preventDefault();
  console.log('LOG OUT button clicked');
  $userName = '';
  $password = '';
  User.current = undefined;
  User.currentValues = [];
  appendCurrentUser();
  console.log('Logging out current user and his values');
  $('#log-out').hide();
  $('#login-form').show();
});

function setCurrentUser() {
  console.log('setCurrentUser FUNCTION FIRED!!!')
  for (var i = 0; i < User.all.length; i++) {
    if ( (Object.values(User.all[i])[0] === $userName) ) {
      console.log('i found the user ' + Object.values(User.all[i])[0] + ' in the User.all ARRAY');
      User.currentValues = Object.values(User.all[i]);
      User.current = Object.values(User.all[i])[0];
      console.log('currentUser = ' + Object.values(User.all[i])[0]);
      console.log('User.currentValues = ' + Object.values(User.all[i]));
    } else {
      console.log('COULD NOT FIND USER IN STORAGE!!!');
      User.current = undefined;
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

function searchLocalStorage () {
  console.log('searchLocalStorage FUNCTION FIRED!!!')
  if (localStorage.length === 0) {
    console.log('There is no local storage.  CREATING NEW USER;')
    new User ($userName, $password);
    moveAllToStorage();
    setCurrentUser()
  } else if (localStorage.length > 0) {
    //pullstorage function
    setCurrentUser();
    console.log(User.current + ' === User.current');
    if (User.current === undefined) {
      console.log('UNDEFINED METHOD FIRED!!!!')
      new User ($userName, $password);
      console.log('created a new USER with the UNDEFINED METHOD')
      moveAllToStorage();
      setCurrentUser()
    } else {
    //pullstorage function
      console.log('USER EXISTS!!! WECOME BACK!!!')
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

// inception.play();
retrieveStorageOnPageLoad();
