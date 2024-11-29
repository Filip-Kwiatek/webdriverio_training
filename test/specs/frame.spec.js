// describe what will be tested
describe("Working with the frames", () => {
// describe in more specific way
  it("should find the text Middle in the bottom middle frame", async () => {
    //     await browser.url(
    //       "https://www.lambdatest.com/selenium-playground/nested-frames/"
    //     );
// create variable with assigned frame
    //     const bottomFrame = await browser.$('frame[name="frame-bottom"]');
// switchFrame is used in order to have a control over the frame
    //     await browser.switchFrame(bottomFrame);
// create variable with assigned frame
    //     const middleFrame = await browser.$('frame[name="frame-middle"]');
// switch to another frame (in this case)
    //     await browser.switchFrame(middleFrame);
// find text in the body tag
    //     let text = await browser.$("body").getText();
// check that the text in the body has a given value (Middle)
    //     expect(text).toBe("Middle");
// switch do default frame
    //     await browser.switchFrame(null);
// creathe variable with assigned frame
    //     const topFrame = await browser.$('frame[name="frame-top"]');
// switch to the frame
    //     await browser.switchFrame(topFrame);
// find the text in body tag
    //     text = await browser.$("body").getText();
// check that the text in the body tag has a given value (Top)
    //     expect(text).toBe("Top");
    //   });

    it("should click a menu item within an iframe", async () => {
      await browser.url("https://practice-automation.com/iframes/");

      // Switch to the top iframe
      const topIframe = await $("#iframe-1");
      await browser.switchFrame(topIframe);

      // Click 'Docs'
      const docs = await $('a[href="/docs/intro"]');
      docs.click();

      // await browser.waitUntil(
      //   () => browser.execute(() => document.readyState === "complete"),
      //   {
      //     timeout: 2 * 1000, // 2 seconds
      //     timeoutMsg: "The page was not loaded.",
      //   }
      // );
      
      // await expect(iframe).toHaveUrl(
      //   "http://xn--playgroundtestcotam-vud.com/docs"
      // );

      // Verify title
      const title = await $("h1").getText();
      expect(title).toBe("Installation");
    });
  });
});
