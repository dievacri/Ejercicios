import {browser, by, element, protractor} from 'protractor';
export class LoginPage {
  navigateTo() {
    return browser.get('/login');
  }

  getLoginComponent() {
    return element(by.tagName('app-login'));
  }

  getTitle() {
    return this.getLoginComponent().element(by.tagName('h2'));
  }

  getInputEmail() {
    return this.getLoginComponent().element(by.id('inputEmail'));
  }

  getInputPassword() {
    return this.getLoginComponent().element(by.id('inputPassword'));

  }

  getBtnLogin() {
    return this.getLoginComponent().element(by.id('btnLogin'));
  }

  getHome() {
    var result = this.eventual(protractor.ExpectedConditions.presenceOf(element(by.tagName('books'))));
    browser.waitForAngular();
    return result;
  }

  getErrorMessage() {
    var message = element(by.id('errorMessage'));
    browser.waitForAngular();
    return message;
  }

  eventual(expectedCondition) {
    return browser.wait(expectedCondition).then(() => {
      return true;
    }, () => {
      return false;
    });
  }
}
