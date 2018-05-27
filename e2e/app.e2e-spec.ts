import { RailjobsPage } from './app.po';

describe('railjobs App', () => {
  let page: RailjobsPage;

  beforeEach(() => {
    page = new RailjobsPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
