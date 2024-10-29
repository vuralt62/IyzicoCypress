const report = require("multiple-cucumber-html-reporter");

module.exports = function(options) {
  console.debug('debug : ' + JSON.stringify(options));
  const config = JSON.parse(JSON.stringify(options));

  let browserName = browser => {
    if (browser.startsWith('electron') || browser.startsWith('chrome')) {
      return 'chrome'
    } else if (browser.startsWith('firefox')) {
      return 'firefox'
    } else if (browser.startsWith('safari')) {
      return 'safari'
    } else if (browser.startsWith('internet explorer')) {
      return 'internet explorer'
    } else {
      return 'edge'
    }
  }

  const metadata =  {
    browser: {
      name: browserName(config.browserName),
      version: config.browserVersion,
    },
    device: "Laptop",
    platform: {
      name: "Windows",
      version: "11",
    },
  };
  
  report.generate({
    jsonDir: "./cypress/reports/cucumber-json/",
    reportPath: "./cypress/reports/cucumber-report/",
    openReportInBrowser:true,
    displayDuration: true,
    metadata: metadata,
    customData: {
      title: "Run info",
      data: [
        { label: "Enviroment", value: config.config.env.ENVIRONMENT },
        { label: "Project", value: config.config.projectName },
        { label: "Execution Start Time", value: config.startedTestsAt},
        { label: "Execution End Time", value: (new Date).toString() },
      ],
    },
  });
};