// imported parent's file
import RegisterPage from "../page_objects/register.page";
// imported data from the json file with data for the register
import testData from "./registerData.json" with { type: "JSON" };

// test describe
describe("User registration", () => {
// runs before every test in this block
  beforeEach(async function () {
// executes this method (open the tested web)
    await RegisterPage.open();
  });
// more specific test describe 
  it("Does password validation", async () => {
// loop which uses JSON as the data provider
    for (const data of testData) {
// executes function
      await RegisterPage.register(
// enteres the parameters
        data.first_name,
        data.last_name,
        data.email,
        data.phone,
        data.password,
        data.confirm_password
      );
// wait 2 seconds
      await browser.pause(2000);
// assign the variable with error message
      const errorMessage = await RegisterPage.getErrorMessage();
// checks that the value of the error message is the same like in the JSON file
// except -> checks that the value meets certain conditions
// toEqual -> checks that the both of the values are the same
      await expect(errorMessage).toEqual(data.error_msg);
    }
  });
});
