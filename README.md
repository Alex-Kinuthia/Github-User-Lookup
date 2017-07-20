# GitHub User Lookup


#### By Alex Kinuthia

## Description

This program is a web app that will allow a user to look up public accounts in GitHub, and view that account's public repositories & corresponding descriptions. The program utilizes the GitHub API to access this information.

## Setup/Installation Requirements

This program can only be accessed on a computer with Git and Atom software, and npm, bower, and gulp globally installed.

* Clone this repository
* To set up package managers, type the following into the command line:
  * $ npm install
  * $ bower install

GitHub can only run 60 requests/hour to its API without a key, so a key is necessary for testing. Get a key through the Personal Access Tokens option in the settings for a GitHub account.
* Create a .env file in the main directory. Use the following format to hold the API key:
  `
  exports.apiKey = "[Key Value Here]";
  `
* To view the webpage, type the following:
  * $ gulp build
  * $ gulp server

## Known Bugs

No known bugs.

## Future Features

HTML | CSS | JavaScript
----- | ----- | -----
Add links to the repo names | --- | Make links go to correct account
--- | --- | Add dates for when repos were created & order by date

## Support and Contact Details

Contact Alex for support in running this program.

## Technologies Used

* HTML
* CSS
* Bootstrap
* jQuery
* JavaScript
* GitHub API

* JavaScript
* GitHub API
=======

