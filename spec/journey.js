describe('sample', () => {
  it('displays a greeting', () => {
    browser.get('http://localhost:63342/angular-es6/app/index.html');
    const text = element(by.css('p')).getText();
    expect(text).toEqual('Hello everybody or some such string.');
  });
});
