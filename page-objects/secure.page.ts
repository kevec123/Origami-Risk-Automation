import {
    BrowserContext,
    expect,
    type Locator,
    type Page,
} from '@playwright/test';

export class SecurePage {

    readonly page: Page;
    readonly secureBanner: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page, context: BrowserContext){
        this.page = page;
        this.secureBanner = page.locator('//*[@id="flash-messages"]/div');
        this.logoutButton = page.locator('//a/i[text()=" Logout"]');
    }

    //Function to naviate to the page when loading the test
    async goto(){
        await this.page.goto('/secure');
    }

    //Function to verify the banner on the page
    async verifyBanner(message: string){
        await expect(this.secureBanner).toContainText(message);
    }

}