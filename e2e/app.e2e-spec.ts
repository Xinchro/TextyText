import { TextyTextMK2Page } from './app.po';

describe('texty-text-mk2 App', () => {
  let page: TextyTextMK2Page;

  beforeEach(() => {
    page = new TextyTextMK2Page();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
