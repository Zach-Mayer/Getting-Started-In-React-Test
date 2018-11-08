require('@babel/register');
const fs = require('fs');

module.exports = ((settings) => {
  if (process.env.SAUCE_USERNAME && process.env.SAUCE_ACCESS_KEY && process.env.TRAVIS_JOB_NUMBER) {
    const TRAVIS_JOB_NUMBER = process.env.TRAVIS_JOB_NUMBER;
    settings.test_settings.default = {
      launch_url: 'http://ondemand.saucelabs.com:80',
      selenium_port: 80,
      selenium_host: 'ondemand.saucelabs.com',
      silent: true,
      username: process.env.SAUCE_USERNAME,
      access_key: process.env.SAUCE_ACCESS_KEY,
      screenshots: {
        enabled: false,
        path: '',
      },
      desiredCapabilities: {
        build: `build-${TRAVIS_JOB_NUMBER}`,
        'tunnel-identifier': TRAVIS_JOB_NUMBER,
      },
    };
    settings.test_settings.chrome = {
      desiredCapabilities: {
        browserName: 'chrome',
        platform: 'OS X 10.11',
        version: '47',
     },
    };
    settings.test_settings.ie11 = {
      desiredCapabilities: {
        browserName: 'internet explorer',
        platform: 'Windows 10',
        version: '11.0',
      },
    }
  }

  const seleniumServerFileName = fs.readdirSync('node_modules/selenium-standalone/.selenium/selenium-server/');
  const geckodriverFileName = fs.readdirSync('node_modules/selenium-standalone/.selenium/geckodriver/')[0];
  const chromedriverFileName = fs.readdirSync('node_modules/selenium-standalone/.selenium/chromedriver/')[0];

  settings.selenium.server_path += seleniumServerFileName;
  settings.selenium.cli_args['webdriver.gecko.driver'] += geckodriverFileName;
  settings.selenium.cli_args['webdriver.chrome.driver'] += chromedriverFileName;

  return settings;
})(require('./nightwatch.json'));
