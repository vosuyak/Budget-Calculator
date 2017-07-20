import { FirebaseProjectPage } from './app.po';

describe('firebase-project App', () => {
  let page: FirebaseProjectPage;

  beforeEach(() => {
    page = new FirebaseProjectPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
