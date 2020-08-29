import {browser, Config} from 'protractor';
import * as reporter from "cucumber-html-reporter";

export let config: Config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,

    framework: 'custom',  // set to "custom" instead of cucumber.
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    
    // Capabilities to be passed to the webdriver instance.
    capabilities: {
      browserName: 'chrome',
      chromeOptions: {
        'args': ['incognito']
    }
    },
  
    // Spec patterns are relative to the configuration file location passed
    // to protractor (in this example conf.js).
    // They may include glob patterns.
    specs: ['../features/Login.feature'],

    cucumberOpts: {
      format:'json:./cucumberreport.json',
      require: ['./stepDefinations/*.js'],  // require step definition files before executing features
    },

    onPrepare: () => {
      browser.manage().timeouts().pageLoadTimeout(40000);
      browser.manage().timeouts().implicitlyWait(30000);
      browser.waitForAngularEnabled(false);
      browser.manage().window().maximize();
    },

    onComplete: () =>{
      var options = {
        theme: 'bootstrap',
        jsonFile: './cucumberreport.json',
        output: './cucumber_report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
          "App Version":"0.3.2",
          "Test Environment": "STAGING",
          "Browser": "Chrome  54.0.2840.98",
          "Platform": "Windows 10",
          "Parallel": "Scenarios",
          "Executed": "Remote"
          }
        };
      reporter.generate(options);
    }
  };