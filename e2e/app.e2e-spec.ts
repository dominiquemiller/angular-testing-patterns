import { TestingPatternsPage } from './app.po';

describe('testing-patterns App', () => {
  let page: TestingPatternsPage;

  beforeEach(() => {
    page = new TestingPatternsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
