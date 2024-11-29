// imported file
import Page from "./page.js";

// class with imported file (variables data)
class LoginPage extends Page {
// create getter with returned input
  get inputUsername() {
    return $("#input-email");
  }
// create getter with returned input
  get inputPassword() {
    return $("#input-password");
  }
// create getter with returned button
  get clickLogin() {
    return $('input[type="submit"]');
  }
// create async function with ready to go parameters to enter (in spec file)
  async login(username, password) {
    await this.inputUsername.setValue(username);
    await this.inputPassword.setValue(password);
    await this.clickLogin.click();
  }
// call the method with keyword super in order to access the parent's properties and methods (path)
  open() {
    return super.open("account/login");
  }
}

export default new LoginPage();
