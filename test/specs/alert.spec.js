describe("Javascript alerts demo", () => {
  it("clicks an alert and verifies the cancel button functionality", async () => {
    await browser.url(
      "https://www.lambdatest.com/selenium-playground/javascript-alert-box-demo"
    );
    
    const secondClickMeButton = await $('(//button[text()="Click Me"])[2]');
    secondClickMeButton.click();
    await browser.pause(3000);

    await browser.dismissAlert();
    await browser.pause(3000);

    const resultText = await $("#confirm-demo").getText();
    expect(resultText).toBe("You pressed Cancel!");
  });
});
