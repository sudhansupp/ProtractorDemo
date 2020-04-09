
var fs= require('fs');

exports.config = {
    // The address of a running selenium server.
    //seleniumAddress: 'http://localhost:4444/wd/hub',

    seleniumServerJar: "../node_modules/selenium-server-standalone-jar/jar/selenium-server-standalone-2.47.1.jar",
    plugins: [{
        package: 'jasmine2-protractor-utils',
        screenshotOnExpectFailure:true,
        screenshotOnSpecFailure:false,
        clearFoldersBeforeTest: true,
        htmlReportDir: '../ProtractorDemo/reports/htmlReports',
        failTestOnErrorLog: {
            failTestOnErrorLogLevel: 900,
            excludeKeywords: ['favicon', 'keyword2']
        }
    }] ,

    capabilities: {
        browserName: 'chrome',
        //shardTestFiles: true,
        maxInstances: 1,
        'version': '09'
    },

    framework: 'jasmine2',

    specs: ['specs/demo-spec.js'],



    getPageTimeout: 900000,

    allScriptsTimeout:600000000,

    beforeLaunch: function () {

        //creates reports folder if does not exist
        var dir = './tmp';
        if (!fs.existsSync(dir)) {
            fs.mkdirSync(dir);
        }

        var fd = fs.openSync('./tmp/tmp.json', 'w');

        fs.closeSync(fs.openSync('./tmp/tmp.json', 'w'));
    },


    onPrepare: function() {
        // browser.manage().timeouts().pageLoadTimeout(30000);
        browser.driver.manage().timeouts().implicitlyWait(30000);
        browser.manage().window().maximize();
        global.presenceOf  = protractor.ExpectedConditions.presenceOf;
        global.EC = protractor.ExpectedConditions;


        global.isAngularSite = function(flag){
            browser.ignoreSynchronization = !flag;
        };

        var SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: true}));

        var jasmineReporters = require('jasmine-reporters');
        jasmine.getEnv().addReporter(new jasmineReporters.JUnitXmlReporter({
            consolidateAll: true,
            filePrefix: 'results',
            savePath: './ProtractorDemo/testresults'
        }));
        var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');


       jasmine.getEnv().addReporter(new Jasmine2HtmlReporter({
            savePath: './ProtractorDemo/testresults',
            takeScreenshotsOnlyOnFailures:true
       }));

        return global.browser.getProcessedConfig().then(function (config) {

        });

    },

// Options to be passed to Jasmine-node.
    jasmineNodeOpts: {
        isVerbose: true,
        includeStackTrace: true,
        showColors: true,
        defaultTimeoutInterval: 1800000

        // print: function() {}
    }
};
