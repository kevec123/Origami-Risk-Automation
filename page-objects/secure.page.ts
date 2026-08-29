import {
    BrowserContext,
    expect,
    type Locator,
    type Page,
} from '@playwright/test';
import { Environment } from '../lib/env';

export class SecurePage {

    readonly page: Page;
    readonly secureBanner: Locator;
    readonly logoutButton: Locator;

    constructor(page: Page, context: BrowserContext){
        this.page = page;
        this.secureBanner = page.locator('//*[@id="flash-messages"]/div');
        this.logoutButton = page.locator('//a/i[text()=" Logout"]');
    }

    async goto(){
        await this.page.goto('/secure');
    }

    async verifyBanner(message: string){
        await expect(this.secureBanner).toContainText(message);
    }

}