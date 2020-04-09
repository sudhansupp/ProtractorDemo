var LoginPage = require('../pages/loginPage.js');


var BaseSpec = function () {

    this.initSetup = function () {
        beforeAll(function () {

            LoginPage.navigate();
        });

        afterAll(function () {



        });

        beforeEach(function () {
        });

        afterEach(function () {
            browser.getProcessedConfig().then(function (caps) {

                var browserName = caps.capabilities.browserName;
                console.log('browserName is:' + browserName);
                if (browserName !== "internet explorer") {
                    it('selecting a service shouldnt throw an error', function () {
                        browser.manage().logs().get('browser').then(function (browserLog) {
                            expect(browserLog.length).toEqual(0);
                        });

                    })
                }
            });
            browser.driver.sleep(2000);
        });
    }
}

module.exports = new BaseSpec();