const assert = require('assert');

describe('journey', () => {
  it('includes greeting', () => {
    browser.url('/');
    assert.equal(browser.getText('p'), 'Hello everybody or some such string.');
  });
});
