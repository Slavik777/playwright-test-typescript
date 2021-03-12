import {ChromiumBrowser, Page} from "playwright";

export const login = async (browser: ChromiumBrowser) => {
    const page = await browser.newPage();
    await page.goto("https://ej2.syncfusion.com/showcase/typescript/webmail/#/home");
    await page.click("button#login");
    await page.close();
}

export const signOut = async (page: Page) => {
    await page.goto("https://ej2.syncfusion.com/showcase/typescript/webmail/#/home");
    await page.click("button#profile-div");
    await page.click('"button#signOut"');
    await page.close();
}