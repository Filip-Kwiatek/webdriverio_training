// import globals
import { browser } from "@wdio/globals";

// export file in order to make it work in another file
export default class Page {
// create a method which let you change the path
  open(path) {
// return the url with modifed path (explained later)
    return browser.url(
      `https://ecommerce-playground.lambdatest.io/index.php?route=${path}`
    );
  }
}
