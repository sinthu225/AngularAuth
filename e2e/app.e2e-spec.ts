import { AngAuthPage } from './app.po';

describe('ang-auth App', () => {
  let page: AngAuthPage;

  beforeEach(() => {
    page = new AngAuthPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
