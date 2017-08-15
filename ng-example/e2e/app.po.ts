import { browser, by, element } from 'protractor';

export class NgCourseDemoPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('app-root a.navbar-brand')).getText();
  }
}
