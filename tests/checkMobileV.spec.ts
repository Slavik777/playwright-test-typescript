import * as assert from "assert";
import {chromium, ChromiumBrowser, Page, webkit, devices, Browser} from "playwright";
import {makeClicks} from "../pageObject/mainPage/utils";

describe("Sandbox", () => {
    let page: Page;
    let browser: Browser;
    const deviceType = devices['iPhone 8'];


    beforeAll(async () => {
        browser = await webkit.launch({headless: false});
        const context = await browser.newContext({
            viewport: deviceType.viewport,
            userAgent: deviceType.userAgent
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

        assert.strictEqual(await page.title(), "Essential JS 2 for TypeScript - Webmail");
        assert.strictEqual(title, "Webmail");
    });
});