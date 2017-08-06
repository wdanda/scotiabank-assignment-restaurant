import { browser, by, element } from 'protractor';

export class ScotiabankAssignmentRestaurantPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('scotia-restaurant-root h1')).getText();
  }
}
