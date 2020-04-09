var basePage = require('./basePage.js');

var envt = require('./../environment.json');
var environment = process.env.environment || envt.env;
var demoBaseURL = process.env.webServerDefaultHost || (environment == 'qa' ? envt.qa.url : (environment == 'dev' ? envt.dev.url : (environment == 'stage' ? envt.stage.url : envt.default.url)));


var LoginPage = function () {


    //Login to Demo url and after login set the syncronization to false
    this.navigateToApplication = function () {

        browser.get(demoBaseURL);

    };


};

LoginPage.prototype = basePage; // extend basePage...
module.exports = new LoginPage();
