describe("Introduction to wdio basic features", () => {
  it("uses the waitUntil command", async () => {

    // Url where the test will be executed
    browser.url("https://ecommerce-playground.lambdatest.io/");
    // Maximize browser window
    browser.maximizeWindow();

    // Find element with given criteria and hover on it
    await $('//span[normalize-space()="Mega Menu"]').moveTo();
    // Find element click on it
    await $('a[title="Printer"]').click();

    // Define variable and find element with h1
    const title = await $("h1");
    // Wait until the text of variable will be have given name
    await title.waitUntil(async function () {
      return (await this.getText()) === "Printers";
    });

    // Define function 
    async function numberOfResultsToBe(count) {
    // Find elements and check that their quantity is as you expected
      const elementCount = $$(".product-thumb").length;
      return (await elementCount) === count;
    }
    // Define variable and find element with given criteria
    const checkbox = await $('(//label[normalize-space()="Pre-Order"])[2]');
    // Click on it
    await checkbox.click();
    // Wait until (executed function) will be have given amount of elements
    await browser.waitUntil(
      async function () {
        return await numberOfResultsToBe(2);
      },
      {
        // In case of error
        timeout: 3000,
        timeoutMsg: "Did not find correct # of results",
        interval: 1000,
      }
    );

    browser.pause(3000);
  });
});
