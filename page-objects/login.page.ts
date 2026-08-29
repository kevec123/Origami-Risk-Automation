import {
    BrowserContext,
    expect,
    type Locator,
    type Page,
} from '@playwright/test';
import { Environment } from '../lib/env';

export class LoginPage {

    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly secureBanner: Locator;

    constructor(page: Page, context: BrowserContext){
        this.page = page;
        this.usernameInput = page.locator('#username');
        this.passwordInput = page.locator('#password');
        this.loginButton = page.locator('//button/i[text()=" Login"]');
        this.secureBanner = page.locator('//*[@id="flash-messages"]/div');
    }

    async goto(){
        await this.page.goto('/login');
    }

    async login(username: string, password: string, message: string){
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
        await expect(this.secureBanner).toContainText(message)
    }
}