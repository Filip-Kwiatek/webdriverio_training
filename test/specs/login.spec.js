// import parent file
import LoginPage from "../page_objects/login.page";

describe("Test logic", () => {
  // Executes before each test in this block
  beforeEach(async function () {
    // call method
    await LoginPage.open();
  });

  // Executes after each test in this block
  // afterEach(async function () {
  //   await browser.saveScreenshot("./screenshots/screenshot.png");
  // });

  it("logs in using valid credentials", async () => {
    // call method with parameters, which will be send
    await LoginPage.login("happy-tester@test.com", "password");
    // wait 3 seconds
    await browser.pause(3000);
  });

  // it("logs in using valid credentials", async () => {
  //   // call method with parameters, which will be send
  //   await LoginPage.login("happy-tester@test.com", "password");
  //   // wait 3 seconds
  //   await browser.pause(3000);
  // });

  // it("logs in using valid credentials", async () => {
  //   // call method with parameters, which will be send
  //   await LoginPage.login("happy-tester@test.com", "password");
  //   // wait 3 seconds
  //   await browser.pause(3000);
  // });
});
