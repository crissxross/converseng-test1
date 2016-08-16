import { ConversenginePage } from './app.po';

describe('conversengine App', function() {
  let page: ConversenginePage;

  beforeEach(() => {
    page = new ConversenginePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
