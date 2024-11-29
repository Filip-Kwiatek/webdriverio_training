// Write title of the tests
describe("Element interactions", () => {
  // Descrbie what specific will be tested
  it("searches for a product", async () => {
    // Write down the website on which the tests will be executed
    browser.url("https://ecommerce-playground.lambdatest.io");
    // Find input with name search and set value to iphone
    // await $('input[name="search"]').setValue("iphone");
    // Find button with type submit and click it
    // await $('button[type="submit"]').click();
    // Wait 3 seconds
    // await browser.pause(3000);

    // Element hover
    await $('//span[normalize-space()="Mega Menu"]').moveTo();
    // await $('a[title="Headphones"]').click();
    // Create new variable 
    const headphones = await $('a[title="Headphones"]');
    // Wait for the x second to display the element
    await headphones.waitForDisplayed({ timeout: 1000 });
    await browser.pause(3000);
  });
});
