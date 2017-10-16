import { AppPage } from './app.po';

describe('bs4typeahead App', () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to Bootstrap 4 (beta) Type-ahead Test!');
  });
});
