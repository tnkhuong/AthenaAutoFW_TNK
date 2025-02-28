import {browser,Config} from 'protractor';

export let config: Config = {
    // The address of a running selenium server.
    // seleniumAddress: 'http://localhost:4444/wd/hub',
    directConnect: true,

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
    specs: ['Login.js'],
  
    // Options to be passed to Jasmine-node.
    //jasmineNodeOpts: {
    //  showColors: true, // Use colors in the command line report.
    //},

    onPrepare: () => {
      browser.manage().timeouts().pageLoadTimeout(40000);
      browser.manage().timeouts().implicitlyWait(30000);
      browser.waitForAngularEnabled(false);
      browser.manage().window().maximize();
    }
  };