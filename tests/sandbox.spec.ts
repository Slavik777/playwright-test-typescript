import * as assert from "assert";
import {chromium, ChromiumBrowser, Page} from "playwright";
import {makeClicks} from "../pageObject/mainPage/utils";
import {login} from "../pageObject/LoginPage";

describe("Sandbox", () => {
  let page: Page;
  let browser: ChromiumBrowser;

  beforeAll(async () => {
    browser = await chromium.launch({headless: false});
    const context = await browser.newContext({
      viewport: {width: 1920, height: 1050}
    });
    page = await context.newPage();
  });

  afterAll(() => {
    if (!page.isClosed()) {
      browser.close();
    }
  });

  test("should be on the Webmail", async () => {
    await page.goto('https://ej2.syncfusion.com/showcase/typescript/webmail/#/home')
    await page.waitForSelector("h1");
    const title = await page.$eval(
      "h1",
      (el: { textContent: any }) => el.textContent
    );

    await makeClicks(page);
    // await login(browser)
    // await page.reload();

    assert.strictEqual(await page.title(), "Essential JS 2 for TypeScript - Webmail");
    assert.strictEqual(title, "Webmail");
  });
});