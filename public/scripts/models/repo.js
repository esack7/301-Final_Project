'use strict';
var app = app || {};

(function(module) {
  // const repos = {};
  // repos.all = [];
  //
  // // COMMENT: What is this function doing? Where is it called? Does it call any other functions, and if so, in what file(s) do those function(s) live?
  // //This is a .get method that requests the API from github. Specifically the admin or whoever's token was setup. It grabs repo's with the argument that was defined in repos.all.filter. It populates repos.all which is later rendered to a page.
  // repos.requestRepos = function(callback) {
  //   $.get('/github/user/repos')
  //   .then(data => repos.all = data, err => console.error(err))
  //   .then(callback);
  // };
  //
  // repos.with = attr => repos.all.filter(repo => repo[attr]);

  module.repos = repos;
})(app);
