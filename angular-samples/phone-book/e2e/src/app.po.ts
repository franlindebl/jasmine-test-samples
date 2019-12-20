import { browser, by, element } from 'protractor';

export class AppPage {
  navigateTo() {
    return browser.get(browser.baseUrl) as Promise<any>;
  }

  getTitleText() {
    return element(by.css('[data-e2e="app-main-title"]')).getText() as Promise<string>;
  }

  getFirstNameInContactList() {
    return element(by.css('tbody[data-e2e="contact-list-body"] tr:nth-child(1) td:nth-child(1)')).getText() as Promise<string>;
  }

  getLastNameInContactList() {
    return element(by.css('tbody[data-e2e="contact-list-body"] tr:last-child td:nth-child(1)')).getText() as Promise<string>;
  }

  setInputNameValue(name: string) {
    element(by.css('[data-e2e="name-input"]')).sendKeys(name);
  }

  setInputPhoneValue(phone: number) {
    element(by.css('[data-e2e="phone-input"]')).sendKeys(phone);
  }

  sendContactFormByClickingButton() {
    element(by.css('[data-e2e="save-contact-button"]')).click();
  }
}
