describe('check if ngHint plugin works on bad apps', function() {
  it('should have ngHint problems on bad apps', function() {
    browser.get('noNgHint.html');
    browser.get('noTag.html');
    browser.get('unused.html');
  });
});
