describe('sample', function() {
  it('displays a greeting', function() {
    browser.get('http://localhost:63342/angular-es6/app/index.html');
    var text = element(by.css('p')).getText();
    expect(text).toEqual('Hello everybody or some such string.');
  });
});
