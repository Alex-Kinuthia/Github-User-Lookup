var apiKey = require("./../.env").apiKey; //Assign apiKey as an empty variable if no .env file

function Account(UserName) {
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

GitHubSearch.prototype.userLookup = function(username, displayResults, displayErrorMessage) {

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
