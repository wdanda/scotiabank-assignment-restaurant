import { ScotiabankAssignmentRestaurantPage } from './app.po';

describe('scotiabank-assignment-restaurant App', () => {
  let page: ScotiabankAssignmentRestaurantPage;

  beforeEach(() => {
    page = new ScotiabankAssignmentRestaurantPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to scotia-restaurant!');
  });
});
