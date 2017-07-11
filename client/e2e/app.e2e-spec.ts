import { LoginPagePage } from './app.po';

describe('login-page App', function() {
  let page: LoginPagePage;

  beforeEach(() => {
    page = new LoginPagePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
