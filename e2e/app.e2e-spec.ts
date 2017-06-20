import { CryptodolphinPage } from './app.po';

describe('cryptodolphin App', () => {
  let page: CryptodolphinPage;

  beforeEach(() => {
    page = new CryptodolphinPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
