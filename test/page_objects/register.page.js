// import parent's file
import Page from "./page.js";

// extend parent's file
class RegisterPage extends Page {
  // getter with the returned element from the register web
  get firstName() {
    return $("#input-password");
  }
  // getter with the returned element from the register web
  get lastName() {
    return $("#input-lastname");
  }
  // getter with the returned element from the register we
  get email() {
    return $("#input-email");
  }
  // getter with the returned element from the register web
  get phone() {
    return $("#input-telephone");
  }
  // getter with the returned element from the register web
  get password() {
    return $("#input-password");
  }
  // getter with the returned element from the register web
  get confirmPassword() {
    return $("#input-confirm");
  }
  // getter with the returned element from the register web
  get continueBtn() {
    return $('input[value="Continue"]');
  }
  // getter with the returned element from the register web
  get errorMsg() {
    return $("(//*[contains(@Class,'text-danger')])[2]");
  }
// async function which prepares the parameters further
  async register(firstName, lastName, email, phone, password, confirmPassword) {
    await this.firstName.setValue(firstName);
    await this.lastName.setValue(lastName);
    await this.email.setValue(email);
    await this.phone.setValue(phone);
    await this.password.setValue(password);
    await this.confirmPassword.setValue(confirmPassword);
    await this.continueBtn.click();
  }
// function which redirects to the page, but with diffrent path (Indicated here)
  open() {
    return super.open("account/register");
  }
// function which returns text of the error message
  getErrorMessage() {
    return this.errorMsg.getText();
  }
}

export default new RegisterPage();
