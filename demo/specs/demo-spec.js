/**
 *
 */

var BaseSpec = require('./base-spec.js');
var DemoPage = require('../pages/demoPage.js');
var LoginPage =     require('../pages/loginPage.js');
describe('login validations',function(){

    //Open Chrome Browser and Login to Ecommerce site

    BaseSpec.initSetup();

    it('launhing the application', function() {
        LoginPage.navigateToApplication();
        browser.get(demoBaseURL);
        browser.get(demoBaseURL);
        browser.get(demoBaseURL);


    });
    it('verify the landing page is coreect or not', function() {
        console.log()
            element.click()
        console.log()
            element.click();
    });
    it('Search some items in the search field ', function() {
        DemoPage.serachSomeItems("t-shirts");

    });
    it('Verify searched items are appearing or not ', function() {
        DemoPage.serachSomeItems("t-shirts");

    });

});
