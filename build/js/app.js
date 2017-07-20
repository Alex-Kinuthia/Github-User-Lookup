(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
exports.apiKey = "fd5d0e655a5b54d5a03e8d25c36bbbc7f1fb8bff";

},{}],2:[function(require,module,exports){
var apiKey = require ("./../.env").apiKey; //Assign apiKey as an empty variable if no .env file

function Account (UserName) {
  this.username = UserName;
}

Account.prototype.getUser = function(showAccount, showNameError) {
  if (apiKey) {
    $.get("https://api.github.com/users/" + this.username + "?access_token=" + apiKey).then(function(response) {
      showAccount(response);
    }).fail(function(error) {
      showNameError(response);
    });
  } else {
    $.get("https://api.github.com/users/" + this.username).then(function(response) {
      showAccount(response);
    }).fail(function(error) {
      showNameError(response);
    });
  }
};

Account.prototype.getRepos = function(showRepoList, showRepoError) {
  if (apiKey) {
    $.get("https://api.github.com/users/" + this.username + "/repos?access_token=" + apiKey + "&per_page=100").then(function(response) {
      showRepoList(response);
    }).fail(function(error) {
      showRepoError(response);
    });
  } else {
    $.get("https://api.github.com/users/" + this.username + "/repos?per_page=100").then(function(response) {
      showRepoList(response);
    }).fail(function(error) {
      showRepoError(response);
    });
  }
};

exports.accountModule = Account;

},{"./../.env":1}],3:[function(require,module,exports){
var Account = require ("./../js/account.js").accountModule;

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
  for (var i = 0; i < response.length; i ++)
  {
    if (response[i].description === null || response[i].description === "") {
      $("#show-repo-list").append("<li>" + response[i].name + "</li>");
    }
    else {
      $("#show-repo-list").append("<li>" + response[i].name + ": " + response[i].description + "</li>");
    }
  }
};

var showRepoError = function(response) {
  $("#show-repo-list").text(error.responseJSON.message);
};

$(document).ready(function(event) {
  $("#username-form").submit(function(event) {
    event.preventDefault();
    var usernameInput = $("#username-input").val();
    $("#show-repo-list").text(""); //Resets getRepos() to blank every time submit btn is entered
    var newAccount = new Account (usernameInput);
    newAccount.getUser(showAccount, showNameError);
    newAccount.getRepos(showRepoList, showRepoError);
  });
});

},{"./../js/account.js":2}]},{},[3]);
