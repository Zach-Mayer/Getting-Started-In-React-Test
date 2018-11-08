const sauce = require('../sauce');

module.exports = {
  beforeEach: browser => {
    browser
      .url('http://localhost:3000')
      .waitForElementVisible('body')
      .waitForElementVisible('#root > div');
  },
  'Smoke test': browser => {
    browser
      .assert.visible('#root > div', 'Check if app has rendered with React')
      .assert.title('React App');
  },
  after: browser => browser.end(),
  tearDown: sauce
};
