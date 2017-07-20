var Account = require("./../js/account.js").accountModule;

var showAccount = function(response) {
  if (response.name === null) {
    $("#show-name").text(response.login);
  } else {
    $("#show-name").text(response.name);
  }
  $("#show-url").text(response.html_url);
  $("#repo-number").show();
  $("#show-repo-number").text(response.public_repos);
  $("#following-header").show();
  $("#show-followers").text(response.followers);
  $("#show-following").text(response.following);
};

var showNameError = function(response) {
  $("#show-name").text(error.responseJSON.message);
};

var showRepoList = function(response) {
  for (var i = 0; i < response.length; i++) {
    if (response[i].description === null || response[i].description === "") {
      $("#show-repo-list").append("<li>" + response[i].name + "</li>");
    } else {
      $("#show-repo-list").append("<li>" + response[i].name + ": " + response[i].description + "</li>");
    }
  }
};

var showRepoError = function(response) {
  $("#show-repo-list").text(error.responseJSON.message);
};

var displayErrorMessage = function(username) {

  $("#error").show().text("Oh Mhen! We couldn’t find any users matching " + "'" + username + "'");
  // $("#username").val(""); If I add this, I will get an undefined in the next search

};



$(document).ready(function(event) {
  $("#username-form").submit(function(event) {
    event.preventDefault();
    var usernameInput = $("#username-input").val();
    $("#show-repo-list").text(""); //Resets getRepos() to blank every time submit btn is entered
    var newAccount = new Account(usernameInput);
    newAccount.getUser(showAccount, showNameError);
    newAccount.getRepos(showRepoList, showRepoError);
  });
});
