exports.config = {
    runner: 'local',
    specs: [ './features/**/*.feature' ],
    exclude: [    ],
     maxInstances: 10,
    capabilities: [{
   maxInstances: 5,
        browserName: 'chrome',
        'goog:chromeOptions': { 
            args: ["--headless", "user-agent=...","--disable-gpu","--window-size=1440,735"]
       },
        acceptInsecureCerts: true
         }],
     logLevel: 'error',
    bail: 0,
    baseUrl: 'http://localhost',
    waitforTimeout: 10000,
    connectionRetryTimeout: 120000,
    connectionRetryCount: 3,
    services: ['docker'],
     framework: 'cucumber',
   reporters: [['allure', {outputDir: 'allure-results'}]],
  cucumberOpts: {
       require: ['./stepDefinition/google.js'],
        backtrace: false,
        requireModule: [],
        dryRun: false,
       failFast: false,
       snippets: true,
       source: true,
       strict: false,
       tagExpression: '',
       timeout: 60000,
       ignoreUndefinedDefinitions: false
    },
   
    onPrepare: function (config, capabilities) {
    },
   
    onComplete: function(exitCode, config, capabilities, results) {
    },
    
}
