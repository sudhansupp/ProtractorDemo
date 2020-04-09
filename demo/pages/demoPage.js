var basePage = require('./basePage.js');

var DemoPage = function () {
    var self=this;

    //the locators declaration for the current page
    this.loginButtonXpath=element(by.xpath("//a[@class='login']"));
    this.searchInputID=element(by.id('search_query_top'));
    this.searchButtonName=  element(by.name('submit_search'));
    this.searchedItems= element(by.xpath("//span[contains(.,'result has been found')]"));




    this.verifyLandingPage=function(){
        //Verify the presence of sign in button
        expect(this.loginButtonXpath.isDisplayed()).toBe(true);
    };
    this.serachSomeItems=function(searchedItem){
      this. searchInputID.sendKeys(searchedItem);
      //Click on Search button
        this.searchButtonName.click();
    };
    this.verifySearchedItesm=function(searchedItem){
        expect(this.searchedItems.isDisplayed()).toBe(true);
    };

};

DemoPage.prototype = basePage; // extend basePage...
module.exports = new DemoPage();