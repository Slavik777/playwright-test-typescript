import {Page} from "playwright";

export const makeClicks = async (page: Page) => {
    await page.click('"Inbox"');
    await page.click('"Sales Reports"');
    await page.click('"Marketing Reports"');
    await page.click('"Sales Reports"');
    await page.click('"Inbox"');
}
